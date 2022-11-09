import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  overflow: 'auto',
  '@smartphone-min': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  '@table-min': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
})
