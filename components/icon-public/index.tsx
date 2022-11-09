import { iconPublic } from 'constants/icon-public'

import type { IconPublicProps } from './types'

export function IconPublic (props: IconPublicProps) {
  const {
    name,
    ...otherProps
  } = props

  const Svg = iconPublic[name]

  return (
    <Svg {...otherProps}/>
  )
}
