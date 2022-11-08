import { useEffect, useState } from 'react'
import { getWeather } from 'services/weather'
import { GetWeatherResponse } from 'services/weather/types'

export function useWeather (city?: string) {
  const [data, setData] = useState<GetWeatherResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const handleGetData = async () => {
    if (!city) return

    try {
      setIsLoading(true)
      const response = await getWeather(city)
      setData(response.data)
    } catch (err) {
      setError(new Error(err as any))
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGetData()
  }, [city])

  return {
    fetchData: handleGetData,
    data,
    isLoading,
    error
  }
}
