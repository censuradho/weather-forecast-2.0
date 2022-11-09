import { CSSProperties, ReactNode } from 'react'

type ViewStyle = Pick<CSSProperties,
  'alignItems'
  | 'alignSelf'
  | 'alignContent'
  | 'justifyContent'
  | 'flex'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'flexDirection'
  | 'backgroundColor'
>

interface BoxProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean;
  gap?: number
  wrap?: boolean
}

export function Box (props: BoxProps) {
  const {
    children,
    fullWidth,
    gap,
    marginTop,
    wrap,
    ...otherProps
  } = props

  return (
    <div style={{
      ...otherProps,
      display: 'flex',
      width: fullWidth ? '100%' : 'auto',
      ...(gap && { gap: `${gap}rem` }),
      ...(marginTop && { marginTop: `${marginTop}rem` }),
      ...(wrap && ({ flexWrap: 'wrap' }))
    }}
    >
      {children}
    </div>
  )
}
