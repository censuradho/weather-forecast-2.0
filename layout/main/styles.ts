import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%'
})

export const Greeting = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '$4',

  span: {
    fontSize: '1.438rem',
    color: '$primary'
  },

  strong: {
    color: '$primary',
    fontSize: '1.6rem',
    fontWeight: 500
  }
})
