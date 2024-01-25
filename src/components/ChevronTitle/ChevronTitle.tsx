import type { FC } from 'react';
import { SvgIcon } from '@/components';
import {
  chevronTitleIconWrapStyle,
  chevronTitleWrapStyle
} from './ChevronTitle.style';
import { css, cx } from '@style/css';
import type { SystemStyleObject } from '@style/types';

type ChevronTitlePropsType = {
  text: string;
  altText?: string;
  cssProp?: SystemStyleObject;
};

const ChevronTitle: FC<ChevronTitlePropsType> = (props) => {
  const { text, altText, cssProp } = props;

  const chevronTitleClassname = cx(chevronTitleWrapStyle, css(cssProp));

  return (
    <div className={chevronTitleClassname}>
      <span>{text}</span>
      <span className={chevronTitleIconWrapStyle}>
        {altText}
        <SvgIcon icon="chevron" />
      </span>
    </div>
  );
};

export default ChevronTitle;
