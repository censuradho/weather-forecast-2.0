import { Box, Container, IconPublic, Typography } from 'components'
import { paths } from 'constants/routes'
import Link from 'next/link'
import { ReactNode } from 'react'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  return (
    <Container>
      <Styles.Container>
        <Styles.Header>
          <Link href={paths.home}>
            <Box alignItems="center" gap={1}>
              <IconPublic size={45} name="logo" />
              <Typography color="white">Weather forecast</Typography>
            </Box>
          </Link>
        </Styles.Header>
        {children}
      </Styles.Container>
    </Container>
  )
}
