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

        </Styles.Close>
        {children}
      </Styles.Content>
    </Styles.Root>
  )
})
