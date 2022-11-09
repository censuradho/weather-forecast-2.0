import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '$4'
})
