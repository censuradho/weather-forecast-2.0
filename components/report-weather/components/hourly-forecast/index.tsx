import * as Styles from './styles'
import { format } from 'lib/date-fns'

import { HourlyForecastTableProps } from './types'
import { parseTemperatureLabel } from 'utils/helpers'

export function HourlyForecastTable (props: HourlyForecastTableProps) {
  const { data } = props

  const renderRows = data.map(value => (
    <tr key={value.id}>
      <td>{format(new Date(value.dt_txt), 'EEE, MMM, dd')}</td>
      <td>{`${parseTemperatureLabel(value.main.temp_max)} / ${parseTemperatureLabel(value.main.temp_min)}`}</td>
    </tr>
  ))

  return (
    <Styles.Table>
      <thead>
        <tr>
          <th>Previsão</th>
        </tr>
      </thead>
      <tbody>
        {renderRows}
      </tbody>
    </Styles.Table>
  )
}
