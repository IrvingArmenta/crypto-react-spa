import type { IconNamesType } from '@/icons';
import { css } from '@style/css';
import { type FC } from 'react';
import { svgIconRawStyle } from './SvgIcon.style';
import { SystemStyleObject } from '@style/types';

type SvgIconPropsType = {
  icon: IconNamesType;
  cssProp?: SystemStyleObject;
};

const SvgIcon: FC<SvgIconPropsType> = (props) => {
  const { icon, cssProp } = props;

  return (
    <svg className={css(svgIconRawStyle, cssProp)} aria-hidden="true">
      <use href={`#icon-${icon}`} fill="currentColor" />
    </svg>
  );
};

export default SvgIcon;
