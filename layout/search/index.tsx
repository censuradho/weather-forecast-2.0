import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { Box, ButtonIcon, Container, Input, Typography } from 'components'
import { ReportWeather } from 'components/report-weather'
import { MainLayout } from 'layout/main'
import { useDebounce } from 'hooks'
import { useWeather } from 'hooks/services'
import { useWeatherContext } from 'context/weather'
import { paths } from 'constants/routes'
import { GetWeatherResponse } from 'services/weather/types'

import * as Styles from './styles'
import { searchSchemaValidation } from './validations'
import { SearchFormData } from './types'
import { RowLoader } from './components/row-loader'

export function SearchLayout () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchemaValidation)
  })

  const router = useRouter()

  const {
    addRecent,
    recents,
    removeRecent
  } = useWeatherContext()

  const city = useDebounce(watch('city'), 1000)

  const { data, error, fetchData, isLoading } = useWeather(city)
  const [report, setReport] = useState<GetWeatherResponse | null>(null)

  const onSubmit = async (data: SearchFormData) => {
    fetchData()
  }

  const handleCloseReport = (open: boolean) => {
    if (!open) setReport(null)
  }

  const handleReport = (report: GetWeatherResponse) => {
    setReport(report)
    addRecent({
      id: report.id,
      name: report.name
    })
  }

  const renderRecentes = useMemo(() => {
    return recents.map(recent => (
      <li key={recent.id} onClick={() => fetchData(recent.name)}>
        {recent.name}
        <ButtonIcon
          icon={{ name: 'close' }}
          onClick={() => removeRecent(recent.id)}
        />
      </li>
    ))
  }, [recents, fetchData])

  const renderReportWeather = () => {
    if (!report) return null
    return (
      <ReportWeather
        open={!!report}
        onOpenChange={handleCloseReport}
        data={report}
      />
    )
  }

  const renderResult = () => {
    if (isLoading) return <RowLoader />

    if (error) return <Typography>Nenhum resultado encontrado</Typography>

    if (!data) return <Typography>Pesquise a cima para exibir resultados</Typography>

    if (data) {
      return (
        <Styles.Result onClick={() => handleReport(data)}>{data.name}</Styles.Result>
      )
    }
  }

  return (
    <MainLayout>
      {renderReportWeather()}
      <Container>
        <Styles.Wrapper>
          <Box flexDirection="column" gap={2}>
            <Box alignItems="center" gap={0.5}>
              <ButtonIcon
                onClick={() => router.push(paths.home)}
                aria-label="Go back"
                icon={{ name: 'arrowLeft' }}
              />
              <Typography color="white">Add cidade</Typography>
            </Box>
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.city?.message}
                register={register('city')}
                leftIcon={{
                  name: 'search',
                  size: 25
                }}
              />
            </Styles.Form>
          </Box>
          <Box flexDirection="column" flex={1} gap={1}>
            <Typography variants="lg" color="white">Resultados</Typography>
            {renderResult()}
          </Box>
          <Box flexDirection="column" flex={1} gap={1}>
            <Typography variants="lg" color="white">Recentes</Typography>
            <Styles.FavoriteList>
              {renderRecentes}
            </Styles.FavoriteList>
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
