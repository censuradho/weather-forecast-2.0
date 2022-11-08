import { memo } from 'react'
import Image from 'next/image'

import * as Styles from './styles'
import { AvatarProps } from './types'

export const Avatar = memo(({
  size,
  ...props
}: AvatarProps) => {
  return (
    <Styles.Container
      style={{
        width: `${size}rem`,
        height: `${size}rem`
      }}
    >
      {props.url && (
        <Image
          src={props.url}
          alt={props.username}
          layout="fill"
        />
      )}
    </Styles.Container>
  )
})
