import { css } from '@style/css';

export const navStyle = css({
  display: 'flex',
  width: '100%',
  borderBottom: '1px solid',
  borderBottomColor: 'gray.100'
});

export const linkStyle = css({
  color: 'gray.700',
  padding: '16px 18px',
  fontSize: '1.1rem',
  position: 'relative',
  _after: {
    content: '""',
    height: '2rem',
    borderRight: '1px solid gray',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 0.4
  },
  _last: {
    _after: {
      opacity: 0
    }
  },
  '&[aria-disabled]': {
    pointerEvents: 'none'
  },
  '&[aria-current=page]': {
    fontWeight: 700,
    color: 'gray.900',
    borderBottom: '2px solid',
    borderBottomColor: 'gray.500'
  }
});
