
import { Box, ButtonIcon, Container, Typography } from 'components'
import { MainLayout } from 'layout/main'
import * as Styles from './styles'

export function SearchLayout () {
  return (
    <MainLayout>
      <Container>
        <Styles.Wrapper>
          <Box alignItems="center">
            <ButtonIcon
              icon={{ name: 'arrowLeft' }}
            />
            <Typography color="white">Add cidade</Typography>
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
