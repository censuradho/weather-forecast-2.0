import { format } from 'lib/date-fns'

export const isBrowser = () => typeof window !== 'undefined'

export const parseTemperatureLabel = (temperature: number) => {
  return `${temperature.toFixed(1)} °C`
}

/**
 * exemple: 20/04/1996
*/
export const parseDate = (date: string | Date) => {
  return format(new Date(date), 'dd/MM/yyyy')
}
