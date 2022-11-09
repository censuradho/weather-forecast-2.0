import { WeatherProvider } from 'context/weather'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import reactGA from 'react-ga4'

import { globalStyle } from 'stitches.config'

export default function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
    reactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string)
  }, [])

  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  )
}
