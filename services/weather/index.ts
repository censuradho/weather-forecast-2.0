import { localApi } from 'services/local'
import { GetWeatherResponse } from './types'

export const getWeather = async (city: string) => {
  const response = await localApi.get<GetWeatherResponse>(`/weather/${city}`)
  if (response.data.cod === '404') {
    const data = response.data as any
    throw new Error(data.message)
  }
  return response
}
