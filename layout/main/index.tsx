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
      <Styles.Greeting>
        <div>
          <span>Olá</span><br />
          <strong>{username}</strong>
        </div>
        <Avatar
          size={4}
          url="https://github.com/censuradho.png"
          username={username}
        />
      </Styles.Greeting>
      {children}
    </Styles.Container>
  )
}
