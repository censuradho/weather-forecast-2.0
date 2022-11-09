import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer
} from 'recharts'
import { theme } from 'stitches.config'
import { LineChartProps } from './types'

export function LineChart (props: LineChartProps) {
  const { data } = props

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart width={730} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          stroke={theme.colors.color.value}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
