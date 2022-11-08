import { Dialog } from 'components'
import { ReportWeatherProps } from './types'

export function ReportWeather (props: ReportWeatherProps) {
  const { onOpenChange, open } = props

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <h1>Dialog</h1>
    </Dialog>
  )
}
