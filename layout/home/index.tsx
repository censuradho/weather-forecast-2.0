import { Box, Button, Container } from 'components'
import { MainLayout } from 'layout/main'
import { FavoriteCard } from './components'
import * as Styles from './styles'

const mock = [
  {
    city: 'Porto Alegre',
    maxTemperature: '39',
    meanTemperature: '39',
    minTemperature: '39',
    createdAt: new Date()
  },
  {
    city: 'Porto Alegre',
    maxTemperature: '39',
    meanTemperature: '39',
    minTemperature: '39',
    createdAt: new Date()
  },
  {
    city: 'Porto Alegre',
    maxTemperature: '39',
    meanTemperature: '39',
    minTemperature: '39',
    createdAt: new Date()
  }
]

export function HomeLayout () {
  const renderFavoriteCards = mock.map((value, index) => (
    <FavoriteCard
      key={index}
      city={value.city}
      maxTemperature={value.maxTemperature}
      meanTemperature={value.meanTemperature}
      minTemperature={value.minTemperature}
      createdAt={value.createdAt}
    />
  ))

  return (
    <MainLayout>
      <Container>
        <Styles.Container>
          {renderFavoriteCards}
        </Styles.Container>
        <Box fullWidth marginTop={2}>
          <Button
            icon={{
              name: 'arrowForward'
            }}
            fullWidth
          >Adicionar cidade</Button>
        </Box>
      </Container>
    </MainLayout>
  )
}
