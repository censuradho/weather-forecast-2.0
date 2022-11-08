import { createContext, ReactNode, useContext, useState } from 'react'
import { GetWeatherResponse } from 'services/weather/types'

interface WeatherContextProps {
  favorites: GetWeatherResponse[]
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider ({ children }: WeatherProviderProps) {
  const [favorites, setFavorites] = useState<GetWeatherResponse[]>([])

  return (
    <WeatherContext.Provider value={{
      favorites
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
