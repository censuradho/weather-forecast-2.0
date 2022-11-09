import { useEffect, useState } from 'react'
import { getHourlyForecast } from 'services/weather'
import type {
  GetHourlyForecastResponse,
  HourlyForecastProps
} from 'services/weather/types'

export function useHourlyForecast (props: HourlyForecastProps) {
  const { lat, lon } = props

  const [data, setData] = useState<GetHourlyForecastResponse['list']>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const handleGetData = async () => {
    try {
      setIsLoading(true)
      const response = await getHourlyForecast({
        lat,
        lon
      })
      setData(response.data.list)
      setError(null)
    } catch (err) {
      setError(new Error(err as any))
      setData([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGetData()
  }, [])

  return {
    fetchData: handleGetData,
    data,
    isLoading,
    error
  }
}
