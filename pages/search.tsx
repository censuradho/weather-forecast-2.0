import { Head } from 'components'
import { SearchLayout } from 'layout/search'

export default function Search () {
  return (
    <>
      <Head
        title="Browse For Your Weather Location"
        description="Find the local weather forecast now for over 3.5 million locations across the globe with AccuWeather."
      />
      <SearchLayout />
    </>
  )
}
