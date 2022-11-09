import { styled } from 'stitches.config'

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

  '@table-min': {
    padding: '1rem'
  }
})
