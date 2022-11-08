import { styled } from 'stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  outline: 'none',
  padding: '1rem',
  borderRadius: '$default',
  height: '3.375rem',

  span: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  '&:disabled': {
    background: '$primaryLight',
    opacity: 0.7,
    cursor: 'unset'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      primary: {
        background: '$primary',
        '> *': {
          color: '$background'
        },

        'svg path': {
          fill: '$white'
        },
        '&:hover, &:focus': {
          background: '$primaryLight',
          'svg path': {
            fill: '$white'
          }
        }
      },
      secondary: {
        background: '$red',
        '> *': {
          color: 'white'
        },

        'svg path': {
          fill: 'White'
        },
        '&:hover': {
          background: '$redDark',
          'svg path': {
            fill: 'white'
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {
  position: 'absolute',

  svg: {
    width: '36px'
  }
})
