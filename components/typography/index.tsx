import { theme } from 'stitches.config'
import * as Styles from './styles'
import { TypographyProps } from './types'

export function Typography (props: TypographyProps) {
  const { children, color, ...otherProps } = props

  return (
    <Styles.Typography
      style={{ color: theme.colors[color || 'color'].value }}
      {...otherProps}
    >
      {children}
    </Styles.Typography>
  )
}
