import { css } from '@style/css';

export const coinDetailsHeaderWrapStyle = css({
  marginBlockEnd: '8px',
  pos: 'relative',
  paddingInlineStart: { base: '8px', sm: '16px', md: '32px' },
  display: 'flex',
  alignItems: 'center'
});

export const coinDetailsTitleWrapStyle = css({
  fontSize: { sm: '4vw', md: '1.8rem' },
  marginInlineStart: '48px',
  pos: 'relative',
  _before: {
    content: '""',
    pos: 'absolute',
    left: '-24px',
    width: '1px',
    bgColor: 'gray.200',
    height: '70%',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  '& > div': {
    display: 'flex',
    alignItems: 'center'
  },
  '& > span': {
    color: 'positiveGreen',
    marginInlineStart: '3.6rem',
    '& > span': {
      textTransform: 'uppercase',
      fontSize: { sm: '3.5vw', md: '1.2rem' },
      fontWeight: '700'
    },
    '&[data-is-negative=true]': {
      color: 'negativeRed'
    }
  },
  '& svg': {
    marginInlineEnd: '0.6rem'
  }
});

export const apexChartWrapperStyle = css({
  height: { base: '35%', md: '45%' },
  animation: 'fadeIn'
});

export const coinDetailsBackButtonStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid gray',
  minW: '1rem',
  padding: '16px',
  borderRadius: '16px',
  aspectRatio: 1,
  transition: 'all 200ms ease-in-out',
  _hover: {
    bgColor: 'gray.100'
  }
});

export const coinDetailsBottomRow = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBlockStart: 'auto',
  marginInline: 'auto',
  maxW: '1024px',
  width: '100%',
  '& > button': {
    fontWeight: '700',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginInlineEnd: { md: '24px', sm: '14px' },
    whiteSpace: 'nowrap'
  }
});

export const coinDetailsBottomButtons = css({
  display: 'flex',
  width: '80%',
  '& > button': {
    flex: 1,
    justifyContent: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: { sm: '0.8rem', md: '1rem' },
    fontSize: { base: '1rem', md: '2rem' },
    bgColor: 'negativeRed',
    borderRadius: '16px',
    _firstOfType: {
      bgColor: 'positiveGreen',
      marginInlineEnd: { md: '1.5rem', sm: '1rem' }
    },
    _hover: {
      filter: 'brightness(1.1)'
    }
  }
});
