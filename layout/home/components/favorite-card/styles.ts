import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  minHeight: '10rem',
  cursor: 'pointer',
  padding: '0.5rem',
  backgroundColor: '$foreground',
  backdropFilter: 'blur(14px)',
  borderRadius: '$default',

  '@table-min': {
    padding: '1rem'
  }
})
