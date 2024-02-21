import { sva } from '@style/css';

export const currencyInfoBlockStyleSVA = sva({
  slots: ['title', 'value', 'wrap', 'percentage'],
  base: {
    wrap: {
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: { color: '#8d919b', fontSize: { sm: '0.8rem', md: '1.2rem' } },
    value: { color: '#333', fontSize: { sm: '1rem', md: '1.5rem' } },
    percentage: { fontSize: { sm: '0.8rem', md: '1.2rem' } }
  },
  variants: {
    isNegative: {
      true: {
        percentage: {
          color: 'negativeRed'
        }
      },
      false: {
        percentage: {
          color: 'positiveGreen'
        }
      }
    }
  },
  defaultVariants: {
    isNegative: false
  }
});
