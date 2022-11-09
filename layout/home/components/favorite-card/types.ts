export interface FavoriteCardProps {
  city: string,
  minTemperature: number,
  maxTemperature: number,
  meanTemperature: number,
  onClick?: () => void,
  createdAt: string | Date
}
