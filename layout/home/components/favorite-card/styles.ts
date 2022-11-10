import { styled } from 'stitches.config'

export const CurrentLocationTag = styled('span', {
  background: '$white',
  padding: '0.5rem',
  borderRadius: '$default',
  color: '$background',
  fontSize: '$xs'
})

export const Container = styled('div', {
  minHeight: '10rem',
  maxHeight: '12rem',
  cursor: 'pointer',
  padding: '0.5rem',
  whiteSpace: 'nowrap',
  backgroundColor: '$foreground',
  backdropFilter: 'blur(14px)',
  borderRadius: '$default',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  variants: {
    active: {
      true: {
        background: '$primary',
        '*': {
          color: '$background !important'
        },
        strong: {
          fontWeight: 500
        }
      }
    }
  },
  '@table-min': {
    padding: '1rem'
  }
})
