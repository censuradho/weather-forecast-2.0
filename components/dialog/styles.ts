import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled, keyframes } from 'stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  // backgroundColor: '$backgroundGradient',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const Content = styled(DialogPrimitive.Content, {
  position: 'fixed',
  background: '$backgroundGradient',
  zIndex: 20,
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  padding: 25,
  backdropFilter: 'blur(14px)',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
})

export const Close = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '1rem',
  right: '1rem'
})

export const {
  Portal,
  Root,
  DialogTrigger
} = DialogPrimitive
