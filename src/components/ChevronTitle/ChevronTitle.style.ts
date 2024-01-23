import { css } from '@style/css';

export const chevronTitleWrapStyle = css.raw({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.1rem'
});

export const chevronTitleIconWrapStyle = css({
  color: '#3dbfe5',
  fontSize: '0.9rem',
  '& svg': {
    marginInlineStart: '8px'
  }
});
