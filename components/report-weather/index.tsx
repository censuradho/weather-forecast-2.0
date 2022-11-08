import { Dialog, Container, Typography, Box, ButtonIcon } from 'components'
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
        <Box flexDirection="column" gap={2}>
          <Box gap={3} flexDirection="column">
            <Box justifyContent="space-between" alignItems="center">
              <Typography>{format(new Date(), 'EEEE, dd/MM/yyyy')}</Typography>
              <ButtonIcon
                onClick={handleToggleFavorite}
                icon={{
                  name: isFavorited ? 'favorite' : 'favoriteOutline',
                  color: 'white'
                }}
              />
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
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">Nascer do sol</Typography>
              <Typography color="heading">{format(new Date(data.sys.sunrise), 'hh:mm')}</Typography>
            </Box>
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">Pôr do sol</Typography>
              <Typography color="heading">{format(new Date(data.sys.sunset), 'hh:mm')}</Typography>
            </Box>
          </Box>
          <Box gap={1}>
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">max</Typography>
              <Typography color="heading">{`${data.main.temp_max} °C`}</Typography>
            </Box>
            <Box flexDirection="column" gap={0.5}>
              <Typography variants="xxs">min</Typography>
              <Typography color="heading">{`${data.main.temp_min} °C`}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Dialog>
  )
}
