import { css } from '@style/css';

export const mainWrapperStyle = css({
  height: '100dvh',
  display: 'flex',
  flexDir: 'column',
  bgColor: 'white',
  minWidth: '350px',
  _dark: {
    bgColor: 'darkgray'
  }
});
