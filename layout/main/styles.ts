import { styled } from 'stitches.config'
import { Container as RootContainer } from 'components'

export const Container = styled(RootContainer, {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',

  '@table-min': {
    height: 'auto'
  }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '$4'
})
