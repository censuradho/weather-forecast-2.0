import { FAVORITES, RECENTS_KEY } from 'constants/localStorage'
import { useLocalStorage, useLocation } from 'hooks'
import { uuid } from 'lib/uuid'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { getWeather, getWeatherByLatLon } from 'services/weather'
import { GetWeatherResponse } from 'services/weather/types'

interface Recent {
  id: number
  name: string
}

export interface Favorite extends GetWeatherResponse {
  createdAt: string | Date
  uuid: string
  isCurrentLocation?: boolean
}
interface WeatherContextProps {
  favorites: Favorite[]
  addFavorite: (item: GetWeatherResponse) => void
  removeFavorite: (id: number) => void
  cleanFavoriteList: () => void,
  addRecent: (item: Recent) => void
  removeRecent: (id: number) => void
  recents: Recent[]
  refetchFavorites: () => Promise<void>
  isFetching: boolean
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider ({ children }: WeatherProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<Favorite[]>(FAVORITES, [])
  const [recents, setRecents] = useLocalStorage<Recent[]>(RECENTS_KEY, [])
  const [isFetching, setIsFetching] = useState(false)

  const { coords } = useLocation()

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

  const handleRemoveRecent = (id: number) => {
    setRecents(prevState => prevState.filter(value => value.id !== id))
  }

  const handleFetchFavorite = async () => {
    if (favorites.length === 0) return

    try {
      const refetchFavorites: Favorite[] = []
      setIsFetching(true)
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
    } finally {
      setIsFetching(false)
    }
  }

  const handleFetchCurrentLocationByLatLon = async () => {
    if (!coords) return

    const { data } = await getWeatherByLatLon({
      lat: coords.latitude,
      lon: coords.longitude
    })

    const favorite: Favorite = {
      ...data,
      uuid: uuid(),
      createdAt: new Date(),
      isCurrentLocation: true
    }

    setFavorites(prevState => ([
      favorite,
      ...prevState.filter(value => value.id !== data.id)
    ]))
  }

  useEffect(() => {
    handleFetchFavorite()
  }, [])

  useEffect(() => {
    handleFetchCurrentLocationByLatLon()
  }, [coords])

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        recents,
        isFetching,
        addFavorite: handleAddFavorites,
        removeFavorite: handleRemoveFavorite,
        cleanFavoriteList: handleCleanFavoriteList,
        addRecent: handleAddRecent,
        removeRecent: handleRemoveRecent,
        refetchFavorites: handleFetchFavorite
      }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
