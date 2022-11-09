import { FAVORITES, RECENTS_KEY } from 'constants/localStorage'
import { useLocalStorage } from 'hooks'
import { uuid } from 'lib/uuid'
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { getWeather } from 'services/weather'
import { GetWeatherResponse } from 'services/weather/types'

interface Recent {
  id: number
  name: string
}

export interface Favorite extends GetWeatherResponse {
  createdAt: string | Date
  uuid: string
}
interface WeatherContextProps {
  favorites: Favorite[]
  addFavorite: (item: GetWeatherResponse) => void
  removeFavorite: (uuid: string) => void
  cleanFavoriteList: () => void,
  addRecent: (item: Recent) => void
  removeRecent: (id: number) => void
  recents: Recent[]
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider ({ children }: WeatherProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<Favorite[]>(FAVORITES, [])
  const [recents, setRecents] = useLocalStorage<Recent[]>(RECENTS_KEY, [])

  const handleAddFavorites = (item: GetWeatherResponse) => {
    const favorite: Favorite = {
      ...item,
      uuid: uuid(),
      createdAt: new Date()
    }

    setFavorites(prevState => ([
      ...prevState,
      favorite
    ]))
  }

  const handleRemoveFavorite = (uuid: string) => {
    setFavorites(prevState => prevState.filter(value => value.uuid !== uuid))
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

  const handleRemoveRecent = (id: number) => {
    setRecents(prevState => prevState.filter(value => value.id !== id))
  }

  const handleFetchFavorite = async () => {
    const refetchFavorites: Favorite[] = []

    for (const favorite of favorites) {
      const response = await getWeather(favorite.name)
      const newFavorite: Favorite = {
        ...response.data,
        uuid: uuid(),
        createdAt: new Date(favorite.createdAt)
      }
      refetchFavorites.push(newFavorite)
    }

    setFavorites(refetchFavorites)
  }

  useEffect(() => {
    handleFetchFavorite()
  }, [])

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        recents,
        addFavorite: handleAddFavorites,
        removeFavorite: handleRemoveFavorite,
        cleanFavoriteList: handleCleanFavoriteList,
        addRecent: handleAddRecent,
        removeRecent: handleRemoveRecent
      }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
