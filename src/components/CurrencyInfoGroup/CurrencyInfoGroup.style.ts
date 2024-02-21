import { css } from '@style/css';

export const currencyInfoGroupWrapStyle = css({
  display: 'flex',
  justifyContent: 'space-between'
});

export const currencyInfoGroupArticle = css({
  flexBasis: 'calc(100% / 3)',
  position: 'relative',
  _after: {
    content: '""',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: '50%',
    borderRight: '1px solid',
    borderRightColor: 'gray.300'
  },
  _last: {
    _after: {
      opacity: 0
    }
  }
});
