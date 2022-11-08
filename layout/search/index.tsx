import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, ButtonIcon, Container, Input, Typography } from 'components'
import { MainLayout } from 'layout/main'
import { useDebounce } from 'hooks'
import { useWeather } from 'hooks/services'

import * as Styles from './styles'
import { searchSchemaValidation } from './validations'
import { SearchFormData } from './types'

export function SearchLayout () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchemaValidation)
  })

  const onSubmit = async (data: SearchFormData) => {

  }

  const city = useDebounce(watch('city'), 1000)

  const { data, error } = useWeather(city)

  const renderResult = () => {
    if (error) return <Typography>Nenhum resultado encontrado</Typography>

    if (data) {
      return (
        <Styles.Result>{data.name}</Styles.Result>
      )
    }
  }

  return (
    <MainLayout>
      <Container>
        <Styles.Wrapper>
          <Box flexDirection="column" gap={2}>
            <Box alignItems="center" gap={0.5}>
              <ButtonIcon
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
          <Box flexDirection="column" gap={1}>
            <Typography variants="lg" color="white">Resultados</Typography>
            {renderResult()}
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
