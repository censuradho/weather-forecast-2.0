import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, ButtonIcon, Container, Input, Typography } from 'components'
import { MainLayout } from 'layout/main'
import { useDebounce } from 'hooks'
import { useWeather } from 'hooks/services'

import * as Styles from './styles'
import { searchSchemaValidation } from './validations'
import { SearchFormData } from './types'
import { useWeatherContext } from 'context/weather'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { paths } from 'constants/routes'

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
    addFavorite,
    favorites,
    removeFavorite
  } = useWeatherContext()

  const city = useDebounce(watch('city'), 1000)

  const { data, error, fetchData } = useWeather(city)

  const onSubmit = async (data: SearchFormData) => {
    fetchData()
  }

  const renderResult = () => {
    if (error) return <Typography>Nenhum resultado encontrado</Typography>

    if (!data) return <Typography>Pesquise a cima para exibir resultados</Typography>

    if (data) {
      return (
        <Styles.Result onClick={() => addFavorite(data)}>{data.name}</Styles.Result>
      )
    }
  }

  const renderRecentesFavorite = useMemo(() => {
    return favorites.map(favorite => (
      <li key={favorite.id}>
        {favorite.name}
        <ButtonIcon
          icon={{ name: 'close' }}
          onClick={() => removeFavorite(favorite.id)}
        />
      </li>
    ))
  }, [favorites])

  return (
    <MainLayout>
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
              {renderRecentesFavorite}
            </Styles.FavoriteList>
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
