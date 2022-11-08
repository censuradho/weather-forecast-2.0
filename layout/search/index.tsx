
import { Box, ButtonIcon, Container, Input, Typography } from 'components'
import { MainLayout } from 'layout/main'
import * as Styles from './styles'

export function SearchLayout () {
  return (
    <MainLayout>
      <Container>
        <Styles.Wrapper>
          <Box flexDirection="column" gap={2}>
            <Box alignItems="center" gap={0.5}>
              <ButtonIcon
                icon={{ name: 'arrowLeft' }}
              />
              <Typography color="white">Add cidade</Typography>
            </Box>
            <Styles.Form>
              <Input
                leftIcon={{
                  name: 'search',
                  size: 25
                }}
              />
            </Styles.Form>
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
