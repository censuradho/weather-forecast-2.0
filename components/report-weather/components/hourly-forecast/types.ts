import { GetHourlyForecastResponse } from 'services/weather/types'

export interface HourlyForecastTableProps {
  data: GetHourlyForecastResponse['list']
}
