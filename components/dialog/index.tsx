import { ButtonIcon } from 'components/button-icon'
import { memo } from 'react'

import * as Styles from './styles'
import { DialogProps } from './types'

export const Dialog = memo((props: DialogProps) => {
  const {
    onOpenChange,
    open,
    children
  } = props

  return (
    <Styles.Root modal open={open} onOpenChange={onOpenChange}>
      <Styles.Overlay />
      <Styles.Content>
        <Styles.Close asChild>
          <ButtonIcon
            icon={{
              name: 'close',
              color: 'white'
            }}
          />
        </Styles.Close>
        {children}
      </Styles.Content>
    </Styles.Root>
  )
})
