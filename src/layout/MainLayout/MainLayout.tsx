import { css } from '@style/css';
import { FC, ReactNode } from 'react';

type MainLayoutPropsType = {
  children: ReactNode;
};

const mainWrapperStyle = css({
  height: '100dvh',
  display: 'flex',
  flexDir: 'column',
  bgColor: 'white',
  _dark: {
    bgColor: 'darkgray'
  }
});

const MainLayout: FC<MainLayoutPropsType> = (props) => {
  const { children } = props;

  return <div className={mainWrapperStyle}>{children}</div>;
};

export default MainLayout;
