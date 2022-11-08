import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  minHeight: '10rem',
  cursor: 'pointer',
  padding: '5rem',
  backgroundColor: '$backgroundGradient',
  backdropFilter: 'blur(14px)',
  borderRadius: '$default'
})
