import { Box, Typography } from 'components'
import { format } from 'lib/date-fns'
import { memo } from 'react'

import * as Styles from './styles'
import { FavoriteCardProps } from './types'

export const FavoriteCard = memo((props: FavoriteCardProps) => {
  const {
    city,
    meanTemperature,
    minTemperature,
    maxTemperature,
    createdAt,
    onClick
  } = props

  return (
    <Styles.Container onClick={onClick}>
      <Box gap={1}>
        <Box
          flexDirection="column"
          gap={0.5}
        >
          <Typography
            color="heading"
            ellipsis
          >{city}</Typography>
          <Typography variants="2xl">{meanTemperature}</Typography>
        </Box>
        <Box flexDirection="column" gap={1}>
          <Box flexDirection="column" gap={0.5}>
            <Typography>Min</Typography>
            <Typography
              color="heading"
              variants="2xl"
            >{minTemperature}</Typography>
          </Box>
          <Box flexDirection="column" gap={0.5}>
            <Typography>Max</Typography>
            <Typography
              color="heading"
              variants="2xl"
            >{maxTemperature}</Typography>
          </Box>
        </Box>
      </Box>
      <Box marginTop={1}>
        <Typography>{format(new Date(createdAt), 'dd/MM/yyyy')}</Typography>
      </Box>
    </Styles.Container>
  )
})
