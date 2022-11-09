import { Avatar } from 'components'
import { ReactNode } from 'react'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  const username = 'Censuradho'

  return (
    <Styles.Container>

      {children}
    </Styles.Container>
  )
}
