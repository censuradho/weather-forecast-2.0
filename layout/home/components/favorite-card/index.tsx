import { memo } from 'react'

import { Box, Typography } from 'components'
import { parseDate, parseTemperatureLabel } from 'utils/helpers'

import * as Styles from './styles'
import { FavoriteCardProps } from './types'

export const FavoriteCard = memo((props: FavoriteCardProps) => {
  const {
    city,
    meanTemperature,
    minTemperature,
    maxTemperature,
    createdAt,
    isCurrentLocation,
    onClick
  } = props

  const renderIsCurrentLocationTag = () => {
    if (!isCurrentLocation) return null
    return (
      <Styles.CurrentLocationTag>Localização atual</Styles.CurrentLocationTag>
    )
  }

  return (
    <Styles.Container onClick={onClick} active={isCurrentLocation}>
      <Box gap={1}>
        <Box
          flexDirection="column"
          gap={0.5}
          flex={1}
        >
          <Typography
            color="heading"
            ellipsis
          >{city}</Typography>
          <Typography
            as="strong"
            variants="2xl"
          >{parseTemperatureLabel(meanTemperature)}</Typography>
        </Box>
        <Box flexDirection="column" gap={1}>
          <Box flexDirection="column" gap={0.5}>
            <Typography as="strong">Min</Typography>
            <Typography
              color="heading"
              variants="heading"
            >{parseTemperatureLabel(minTemperature)}</Typography>
          </Box>
          <Box flexDirection="column" gap={0.5}>
            <Typography as="strong">Max</Typography>
            <Typography
              color="heading"
              variants="heading"
            >{parseTemperatureLabel(maxTemperature)}</Typography>
          </Box>
        </Box>
      </Box>
      <Box marginTop={1} fullWidth justifyContent="space-between" alignItems="center">
        <Typography as="strong">{parseDate(createdAt)}</Typography>
        {renderIsCurrentLocationTag()}
      </Box>
    </Styles.Container>
  )
})
