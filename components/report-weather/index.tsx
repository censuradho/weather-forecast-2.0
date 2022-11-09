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
import { useEffect, useMemo } from 'react'
import { getHourlyForecast } from 'services/weather'

import { ReportWeatherProps } from './types'
import { LineChart } from './components'
import { useHourlyForecast } from 'hooks/services'
import { LineChartProps } from './components/line-chart/types'
import { parseTemperatureLabel } from 'utils/helpers'

export function ReportWeather (props: ReportWeatherProps) {
  const { onOpenChange, open, data } = props

  const {
    favorites,
    removeFavorite,
    addFavorite
  } = useWeatherContext()

  const {
    data: hourlyForecastData
  } = useHourlyForecast({
    lat: data.coord.lat,
    lon: data.coord.lon
  })

  const favoriteIds = favorites.map(value => value.id)
  const isFavorited = favoriteIds.includes(data.id)

  const handleToggleFavorite = () => {
    if (isFavorited) return removeFavorite(data.id)

    addFavorite(data)
  }

  const lineChartHourlyForecast: LineChartProps['data'] = useMemo(() =>
    hourlyForecastData.map(value => ({
      day: format(value.dt_txt, 'EEEE - hh:mm'),
      temperature: `${value.main.temp}`
    }))
  , [hourlyForecastData])

  const renderLineChart = () => {
    if (lineChartHourlyForecast.length === 0) return null

    return (
      <LineChart
        data={lineChartHourlyForecast}
      />
    )
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
            <Typography color="heading" variants="4xl">{parseTemperatureLabel(data?.main?.feels_like)}</Typography>
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
                <Typography color="heading">{parseTemperatureLabel(data.main.temp_max)}</Typography>
              </Box>
              <IconPublic name="max" />

            </Box>
            <Box alignItems="center">
              <Box flexDirection="column" gap={0.5}>
                <Typography variants="xxs">min</Typography>
                <Typography color="heading">{parseTemperatureLabel(data.main.temp_min)}</Typography>
              </Box>
              <IconPublic name="min" />
            </Box>
          </Box>
          {renderLineChart()}
        </Box>
      </Container>
    </Dialog>
  )
}
