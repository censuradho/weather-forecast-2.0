import { memo } from 'react'
import ContentLoader from 'react-content-loader'

import { theme } from 'stitches.config'

export const RowLoader = memo(() => (
  <ContentLoader
    speed={0.4}
    width={400}
    height={40}
    viewBox="0 0 400 40"
    backgroundColor={theme.colors.background.value}
    foregroundColor={theme.colors.foreground.value}
  >
    <rect x="0" y="0" rx="0" ry="0" width="400" height="40" />
  </ContentLoader>
))
