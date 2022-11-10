import { styled } from 'stitches.config'

export const Table = styled('table', {
  borderCollapse: 'collapse',
  th: {
    textAlign: 'left',
    fontSize: '$md',
    color: '$white'
  },
  td: {
    padding: '1rem 0'
  }
})
