import { Typography } from 'components/typography'
import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    }
  }
})

export const Input = styled('input', {
  borderColor: '$highlight',
  borderWidth: '1px',
  background: '$foreground',
  width: '100%',
  borderStyle: 'solid',
  height: '3rem',
  borderRadius: '$default',
  outline: 'none',
  padding: '0 1rem',
  '&::placeholder': {
    color: '$highlight',
    fontSize: '0.8rem',
    fontWeight: 400
  },

  '&:focus': {
    borderColor: '$primary'
  },

  variants: {
    hasLeftIcon: {
      true: {
        paddingLeft: '3rem'
      }
    },
    hasRightIcon: {
      true: {
        paddingRight: '3rem'
      }
    },
    hasError: {
      true: {
        borderColor: '$error',
        color: '$error'
      }
    }
  }
})

export const Label = styled('label', {
  cursor: 'pointer',

  variants: {
    hasError: {
      true: {
        color: '$error'
      }
    }
  }
})

export const ErrorMessage = styled(Typography, {
  color: '$error'
})

export const LeftIconView = styled('div', {
  position: 'absolute',
  left: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const RightIconView = styled('div', {
  position: 'absolute',
  right: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const IconView = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
})
