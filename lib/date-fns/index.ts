import {
  formatDistanceToNow as FormatDistanceToNow,
  format as Format
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDistanceToNow = (date: Date) =>
  FormatDistanceToNow(date, {
    locale: ptBR
  })

export const format = (date: Date | string, format: string) =>
  Format(new Date(date), format, {
    locale: ptBR
  })
