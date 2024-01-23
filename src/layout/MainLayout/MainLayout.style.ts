import { css } from '@style/css';

export const mainWrapperStyle = css({
  height: '100dvh',
  display: 'flex',
  flexDir: 'column',
  bgColor: 'white',
  margin: '0 auto',
  _dark: {
    bgColor: 'darkgray'
  },
  '& > main': {
    flex: 1
  }
});
