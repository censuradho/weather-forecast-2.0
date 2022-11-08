export interface FavoriteCardProps {
  city: string,
  minTemperature: string,
  maxTemperature: string,
  meanTemperature: string,
  onClick?: () => void,
  createdAt: string | Date
}
