import { css } from '@style/css';

export const iconsNavBarWrapStyle = css({
  minH: '100px'
});

export const iconsNavBarListStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100%',
  '& li': {
    height: '100%',
    display: 'inherit',
    flex: 1
  },
  '& a': {
    pointerEvents: 'none',
    fontSize: '0.7rem',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '0.5rem',
    '&[aria-disabled]': {
      color: 'gray.400'
    },
    md: {
      fontSize: '1.3rem'
    }
  }
});
