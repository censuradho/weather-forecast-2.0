import { styled } from 'stitches.config'

export const Typography = styled('span', {
  variants: {
    ellipsis: {
      true: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%'
      }
    },

    variants: {
      '4xl': {
        fontSize: '$4xl'
      },
      '2xl': {
        fontSize: '$2xl'
      },
      lg: {
        fontSize: '$lg'
      },
      text: {
        true: {
          fontSize: '$sm'
        }
      },
      xxs: {
        true: {
          fontSize: '$xxs'
        }
      },
      heading: {
        true: {
          fontSize: '$md'
        }
      }
    },
    bold: {
      true: {
        fontWeight: 600
      }
    },
    lineThrough: {
      true: {
        textDecoration: 'line-through'
      }
    }
  },

  defaultVariants: {
    variants: 'text'
  }
})
