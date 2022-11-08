import { DialogProps } from 'components/dialog/types'

type RootDialogProps = Pick<DialogProps,
  'onOpenChange'
  | 'open'
>

export interface ReportWeatherProps extends RootDialogProps {

}
