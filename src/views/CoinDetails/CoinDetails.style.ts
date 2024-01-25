import { css } from '@style/css';

export const coinDetailsHeaderWrapStyle = css({
  marginBlockEnd: '8px',
  marginBlockStart: '16px',
  paddingInlineStart: { base: '8px', sm: '16px', md: '32px' },
  display: 'flex',
  alignItems: 'center'
});

export const coinDetailsTitleWrapStyle = css({
  fontSize: '1.8rem',
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
      fontSize: '1.2rem',
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
  height: '45%'
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
