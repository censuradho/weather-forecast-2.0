import { WeatherProvider } from 'context/weather'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { globalStyle } from 'stitches.config'

export default function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  )
}
