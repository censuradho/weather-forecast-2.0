import {
  Dialog,
  Container,
  Typography,
  Box,
  ButtonIcon,
  IconPublic
} from 'components'
import { useWeatherContext } from 'context/weather'
import { format } from 'lib/date-fns'

import { ReportWeatherProps } from './types'

export function ReportWeather (props: ReportWeatherProps) {
  const { onOpenChange, open, data } = props

  const {
    favorites,
    removeFavorite,
    addFavorite
  } = useWeatherContext()

  const favoriteIds = favorites.map(value => value.id)
  const isFavorited = favoriteIds.includes(data.id)

  const handleToggleFavorite = () => {
    if (isFavorited) return removeFavorite(data.id)

    addFavorite(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Container>
        <Box marginTop={1} flexDirection="column" gap={2}>
          <Box flexDirection="column">
            <Box marginBottom={40} justifyContent="space-between" alignItems="center">
              <Typography>{format(new Date(), 'EEEE, dd/MM/yyyy')}</Typography>
              <ButtonIcon
                onClick={handleToggleFavorite}
                icon={{
                  name: isFavorited ? 'favorite' : 'favoriteOutline',
                  color: 'white'
                }}
              />
            </Box>
            <Box>
              <Typography color="white" bold>{data.name}</Typography>
            </Box>
            <Typography color="heading" variants="4xl">{`${data?.main?.feels_like.toFixed(1)} °C`}</Typography>
          </Box>
          <Box gap={1}>
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">Vento</Typography>
              <Typography color="heading">{`${data.wind.speed}m/s`}</Typography>
            </Box>
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">Humid.</Typography>
              <Typography color="heading">{`${data.main.humidity}%`}</Typography>
            </Box>
          </Box>
          <Box gap={1}>
            <Box flexDirection="column" alignItems="flex-start" gap={0.5}>
              <IconPublic name="sunrise" />
              <Box flexDirection="column" gap={0.5}>
                <Typography variants="xxs">Nascer do sol</Typography>
                <Typography color="heading">{format(new Date(data.sys.sunrise * 1000), "hh:mm aaaaa'm")}</Typography>
              </Box>
            </Box>
            <Box flexDirection="column" alignItems="flex-start" gap={0.5}>
              <IconPublic name="sunset" />
              <Box flexDirection="column" gap={0.5}>
                <Typography variants="xxs">Pôr do sol</Typography>
                <Typography color="heading">{format(new Date(data.sys.sunset * 1000), "hh:mm aaaaa'm")}</Typography>
              </Box>
            </Box>
          </Box>
          <Box gap={1}>
            <Box alignItems="center">
              <Box flexDirection="column" gap={0.5}>
                <Typography variants="xxs">max</Typography>
                <Typography color="heading">{`${data.main.temp_max} °C`}</Typography>
              </Box>
              <IconPublic name="max" />

            </Box>
            <Box alignItems="center">
              <Box flexDirection="column" gap={0.5}>
                <Typography variants="xxs">min</Typography>
                <Typography color="heading">{`${data.main.temp_min} °C`}</Typography>
              </Box>
              <IconPublic name="min" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Dialog>
  )
}
