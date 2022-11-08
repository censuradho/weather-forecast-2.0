import { DialogProps } from 'components/dialog/types'
import { GetWeatherResponse } from 'services/weather/types'

type RootDialogProps = Pick<DialogProps,
  'onOpenChange'
  | 'open'
>

export interface ReportWeatherProps extends RootDialogProps {
  data: GetWeatherResponse
}
