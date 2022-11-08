import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const Form = styled('form', {})

export const Result = styled('button', {
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1rem',

  transition: '0.1s',

  '&:hover': {
    backgroundColor: '$foreground'
  }
})
