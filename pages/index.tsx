import { HomeLayout } from 'layout'
import { useEffect } from 'react'
import { getWeather } from 'services/weather'

export default function Home () {
  useEffect(() => {
    getWeather('Porto Alegre')
  }, [])

  return (
    <HomeLayout />
  )
}
