
import { Container } from 'components'
import { MainLayout } from 'layout/main'
import * as Styles from './styles'

export function SearchLayout () {
  return (
    <MainLayout>
      <Container>
        <Styles.Wrapper>
          <h1>Search page</h1>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
