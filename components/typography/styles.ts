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
      '2xl': {
        fontSize: '$2xl'
      },
      text: {
        true: {
          fontSize: '$sm'
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
