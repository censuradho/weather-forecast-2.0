import { Container } from 'components'
import { MainLayout } from 'layout/main'
import { FavoriteCard } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <MainLayout>
      <Container>
        <Styles.Container>

          <FavoriteCard
            city="Porto Alegre"
            maxTemperature="39"
            meanTemperature="39"
            minTemperature="30"
            createdAt={new Date()}
          />
        </Styles.Container>
      </Container>
    </MainLayout>
  )
}
