import { css } from '@style/css';

export const coinHeatPricesLoadingStyle = css({
  display: 'flex',
  paddingBlockStart: '16px',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid',
  borderColor: 'gray.300',
  borderRadius: '1rem'
});

export const coinHeatPricesWrapperStyle = css({
  paddingBlockStart: '16px',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  flexDir: 'column',
  animation: 'fadeIn',
  md: {
    flexDir: 'row',
    alignItems: 'center'
  }
});

const coinPriceBoxSharedStyles = css.raw({
  bgColor: 'positiveGreen',
  color: 'white',
  fontWeight: '700',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDir: 'column',
  gap: '0.8rem',
  paddingBlock: '1.2rem',
  pos: 'relative',
  '& a': {
    pos: 'absolute',
    inset: 0,
    display: 'inline-block'
  },
  '&[data-is-negative=true]': {
    bgColor: 'negativeRed'
  },
  '&:has(a)': {
    _hover: {
      filter: 'brightness(1.1)'
    }
  }
});

export const coinPriceBoxBTCStyle = css({
  ...coinPriceBoxSharedStyles,
  lineHeight: 1,
  height: '65%',
  fontSize: '5.5rem',
  '& .price': {
    fontSize: '2.5rem',
    '& span': {
      fontSize: '1.3rem'
    }
  },
  '& .diff': {
    fontSize: '1.5rem'
  },
  md: {
    height: '100%',
    width: '65%'
  }
});

export const coinPriceBoxETHStyle = css({
  ...coinPriceBoxSharedStyles,
  lineHeight: 1,
  fontSize: '2.5rem',
  height: '35%',
  marginBlockStart: { md: 0, base: '16px' },
  '& .price': {
    fontSize: '2rem',
    '& span': {
      fontSize: '0.9rem'
    }
  },
  '& .diff': {
    fontSize: '1rem'
  },
  md: {
    height: '100%',
    width: '35%',
    marginInlineStart: '16px'
  }
});
