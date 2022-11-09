import { iconPublic } from 'constants/icon-public'

import type { IconPublicProps } from './types'

export function IconPublic (props: IconPublicProps) {
  const {
    name,
    size = 30
  } = props

  const Svg = iconPublic[name]

  return (
    <Svg width={size} height={size} />
  )
}
