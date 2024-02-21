import { FC, ReactNode } from 'react';
import { mainWrapperStyle } from './MainLayout.style';
import { setTestProps } from '@/utils/setTestProps';

type MainLayoutPropsType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutPropsType> = (props) => {
  const { children } = props;

  return (
    <div
      {...setTestProps({ testid: 'main-layout' })}
      className={mainWrapperStyle}
    >
      {children}
    </div>
  );
};

export default MainLayout;
