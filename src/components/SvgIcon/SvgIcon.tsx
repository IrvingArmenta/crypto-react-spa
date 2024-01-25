import type { IconNamesType } from '@/icons';
import { css, cx } from '@style/css';
import { type FC } from 'react';
import { svgIconStyle } from './SvgIcon.style';
import { SystemStyleObject } from '@style/types';

type SvgIconPropsType = {
  icon: IconNamesType;
  cssProp?: SystemStyleObject;
};

const SvgIcon: FC<SvgIconPropsType> = (props) => {
  const { icon, cssProp } = props;

  const classname = cx(svgIconStyle, css(cssProp));

  return (
    <svg className={classname} aria-hidden="true">
      <use href={`#icon-${icon}`} fill="currentColor" />
    </svg>
  );
};

export default SvgIcon;
