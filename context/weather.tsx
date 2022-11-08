import { FAVORITES } from 'constants/localStorage'
import { useLocalStorage } from 'hooks'
import { createContext, ReactNode, useContext } from 'react'
import { GetWeatherResponse } from 'services/weather/types'

interface WeatherContextProps {
  favorites: GetWeatherResponse[]
  addFavorite: (item: GetWeatherResponse) => void
  removeFavorite: (id: number) => void
  cleanFavoriteList: () => void
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider ({ children }: WeatherProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<GetWeatherResponse[]>(FAVORITES, [])

  const handleAddFavorites = (item: GetWeatherResponse) => {
    setFavorites(prevState => ([
      ...prevState.filter(value => value.id !== item.id),
      item
    ]))
  }

  const handleRemoveFavorite = (id: number) => {
    setFavorites(prevState => prevState.filter(value => value.id !== id))
  }

  const handleCleanFavoriteList = () => {
    setFavorites([])
  }

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        addFavorite: handleAddFavorites,
        removeFavorite: handleRemoveFavorite,
        cleanFavoriteList: handleCleanFavoriteList
      }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
