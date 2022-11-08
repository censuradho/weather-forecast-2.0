import { icons } from 'constants/icons'

import { theme } from 'stitches.config'

import type { IconProps } from './types'

export function Icon (props: IconProps) {
  const {
    name,
    color,
    customColor
  } = props

  const Svg = icons[name]

  const fill = ((customColor || theme.colors[color || 'color'].value)) as string

  return (
    <Svg style={{ fill }} />
  )
}
