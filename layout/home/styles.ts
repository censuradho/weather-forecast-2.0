import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',

  '@table-min': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
})
