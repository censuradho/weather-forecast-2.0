import { iconPublic } from 'constants/icon-public'

export type IconNames = keyof typeof iconPublic

export interface IconPublicProps {
  name: IconNames
}
