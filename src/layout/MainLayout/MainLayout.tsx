import { FC, ReactNode } from 'react';
import { mainWrapperStyle } from './MainLayout.style';

type MainLayoutPropsType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutPropsType> = (props) => {
  const { children } = props;

  return (
    <div data-testid="main-layout" className={mainWrapperStyle}>
      {children}
    </div>
  );
};

export default MainLayout;
