import { createStitches } from '@stitches/react'
import { colors } from 'constants/colors'
import { fonts } from 'constants/fonts'
import { lineHeights } from 'constants/line-heights'
import { space } from 'constants/space'
import { fontSizes } from 'constants/fontSizes'
import { radii } from 'constants/radii'
import { breakpoints } from 'constants/breakpoints'

const {
  styled,
  globalCss: GlobalCss,
  getCssText,
  theme,
  css,
  keyframes,
  createTheme
} = createStitches({
  theme: {
    colors,
    fonts,
    space,
    lineHeights,
    radii,
    fontSizes
  },
  media: breakpoints
})

const globalStyle = GlobalCss({

  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: '$default',
    color: '$color',
    '-webkit-font-smoothing': 'antialiased'
  },
  body: {
    backgroundColor: '$background'
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  li: {
    listStyle: 'none'
  },
  a: {
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'pointer'
  }
})

export {
  styled, getCssText, theme, css, keyframes, createTheme, globalStyle
}
