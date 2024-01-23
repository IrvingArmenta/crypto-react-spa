import { css } from '@style/css';

export const coinHeatPricesLoadingStyle = css({
  display: 'flex',
  marginBlockStart: '16px',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid',
  borderColor: 'gray.300',
  borderRadius: '1rem'
});

export const coinHeatPricesWrapperStyle = css({
  marginBlockStart: '16px',
  flex: 1,
  md: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const coinPriceBoxSharedStyles = css.raw({
  bgColor: 'negativeRed',
  color: 'white',
  fontWeight: '700',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDir: 'column',
  gap: '0.8rem',
  paddingBlock: '1.2rem'
});

export const coinPriceBoxBTCStyle = css({
  ...coinPriceBoxSharedStyles,
  lineHeight: 1,
  height: '65%',
  fontSize: '5.5rem',
  '& .price': {
    fontSize: '2.5rem'
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
    fontSize: '2rem'
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
