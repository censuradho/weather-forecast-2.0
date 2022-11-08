import { localApi } from 'services/local'
import { GetWeatherResponse } from './types'

export const getWeather = async (city: string) => {
  const response = await localApi.get<GetWeatherResponse>(`/weather/${city}`)
  return response
}
