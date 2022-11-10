import qs from 'querystring'

import { localApi } from 'services/local'

import {
  Coord,
  GetHourlyForecastResponse,
  GetWeatherResponse,
  HourlyForecastProps
} from './types'

export const getWeather = async (city: string) => {
  const response = await localApi.get<GetWeatherResponse>(`/weather/${city}`)
  if (response.data.cod === '404') {
    const data = response.data as any
    throw new Error(data.message)
  }
  return response
}

export const getWeatherByLatLon = async (props: Coord) => {
  const query = qs.stringify({
    ...props
  })

  const response = await localApi.get<GetWeatherResponse>(`/weather?${query}`)

  if (response.data.cod === '404') {
    const data = response.data as any
    throw new Error(data.message)
  }

  return response
}
/**
 * Hourly forecast for 4 days (96 timestamps).
*/
export const getHourlyForecast = async (props: HourlyForecastProps) => {
  const query = qs.stringify({
    ...props
  })

  const response = await localApi.get<GetHourlyForecastResponse>(`/weather/hourly-forecast?${query}`)
  if (response.data.cod === '404') {
    const data = response.data as any
    throw new Error(data.message)
  }

  return response
}
