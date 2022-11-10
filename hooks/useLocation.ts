import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useLocation () {
  const [error, setError] = useState<Error | GeolocationPositionError | null>(null)
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null)
  const [hasAcceptGeolocation, setHasAcceptGeolocation] = useLocalStorage('@censuradho/hasAcceptGeolocation', false)

  useEffect(() => {
    if (hasAcceptGeolocation) return

    if (!navigator.geolocation) return setError(new Error('Geolocation is not supported by your browser'))
    navigator.geolocation.getCurrentPosition(success => {
      const { coords } = success
      setCoords(coords)
    }, error => {
      setHasAcceptGeolocation(false)
      setError(error)
    })
  }, [])

  return {
    error,
    coords
  }
}
