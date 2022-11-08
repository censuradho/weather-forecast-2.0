import { FAVORITES, RECENTS_KEY } from 'constants/localStorage'
import { useLocalStorage } from 'hooks'
import { createContext, ReactNode, useContext } from 'react'
import { GetWeatherResponse } from 'services/weather/types'

interface Recent {
  id: number
  name: string
}
interface WeatherContextProps {
  favorites: GetWeatherResponse[]
  addFavorite: (item: GetWeatherResponse) => void
  removeFavorite: (id: number) => void
  cleanFavoriteList: () => void,
  addRecent: (item: Recent) => void
  recents: Recent[]
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider ({ children }: WeatherProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<GetWeatherResponse[]>(FAVORITES, [])
  const [recents, setRecents] = useLocalStorage<Recent[]>(RECENTS_KEY, [])

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

  const handleAddRecent = (item: Recent) => {
    setRecents(prevState => ([
      ...prevState.filter(value => value.id !== item.id),
      item
    ]))
  }

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        recents,
        addFavorite: handleAddFavorites,
        removeFavorite: handleRemoveFavorite,
        cleanFavoriteList: handleCleanFavoriteList,
        addRecent: handleAddRecent
      }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
