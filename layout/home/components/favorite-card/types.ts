export interface FavoriteCardProps {
  city: string,
  minTemperature: number,
  maxTemperature: number,
  meanTemperature: number,
  createdAt: string | Date,
  isCurrentLocation?: boolean
  onClick?: () => void,
}
