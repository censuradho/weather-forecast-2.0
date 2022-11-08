import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flex: 1
})

export const Form = styled('form', {})

export const ResultView = styled('div', {
  minHeight: '4rem'
})

export const Result = styled('button', {
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1rem',
  transition: '0.1s',

  '&:hover': {
    backgroundColor: '$foreground'
  }
})

export const FavoriteList = styled('ul', {
  minHeight: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  li: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})
