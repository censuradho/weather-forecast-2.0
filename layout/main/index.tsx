import { Box, IconPublic, Typography } from 'components'
import { ReactNode } from 'react'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  return (
    <Styles.Container>
      <Styles.Header>
        <Box alignItems="center" gap={1}>
          <IconPublic size={45} name="logo" />
          <Typography color="white">Weather forecast</Typography>
        </Box>
      </Styles.Header>
      {children}
    </Styles.Container>
  )
}
