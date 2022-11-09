import { Box, Button } from 'components'
import { ReportWeather } from 'components/report-weather'
import { paths } from 'constants/routes'
import { Favorite, useWeatherContext } from 'context/weather'
import { MainLayout } from 'layout/main'
import { useState } from 'react'

import { FavoriteCard } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  const { favorites } = useWeatherContext()

  const [report, setReport] = useState<Favorite | null>(null)

  const renderFavoriteCards = favorites.map((value, index) => (
    <FavoriteCard
      key={index}
      city={value.name}
      maxTemperature={value.main.temp_max}
      meanTemperature={value.main.temp}
      minTemperature={value.main.temp_min}
      createdAt={value.createdAt}
      onClick={() => setReport(value)}
    />
  ))

  const handleOpenChangeReportWeatherDialog = (open: boolean) => {
    if (!open) setReport(null)
  }

  const renderReport = () => {
    if (!report) return null
    return (
      <ReportWeather
        data={report}
        open={!!report}
        onOpenChange={handleOpenChangeReportWeatherDialog}
      />
    )
  }

  return (
    <MainLayout>
      {renderReport()}
      <Styles.Container>
        {renderFavoriteCards}
      </Styles.Container>
      <Box fullWidth marginTop={2}>
        <Button
          href={paths.search}
          as="a"
          icon={{
            name: 'arrowForward'
          }}
          fullWidth
        >Adicionar cidade</Button>
      </Box>
    </MainLayout>
  )
}
