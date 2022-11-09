import { Head } from 'components'
import { HomeLayout } from 'layout'

export default function Home () {
  return (
    <>
      <Head
        title="Weather Forecast"
        description="Weather forecast has local and international weather forecasts from the most accurate weather forecasting technology featuring up to the minute weather reports"
      />
      <HomeLayout />
    </>
  )
}
