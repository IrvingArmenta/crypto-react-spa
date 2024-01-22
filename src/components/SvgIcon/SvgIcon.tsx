import type { IconNamesType } from '@/icons';
import { css } from '@style/css';
import { useMemo, type FC } from 'react';
import { svgIconRawStyle } from './SvgIcon.style';

type SvgIconPropsType = {
  icon: IconNamesType;
  color?: string;
  size?: `${number}rem`;
};

const SvgIcon: FC<SvgIconPropsType> = (props) => {
  const { icon, color = '#333', size = '1rem' } = props;

  const svgIconStyle = useMemo(
    () => css(svgIconRawStyle, { width: size }),
    [size]
  );

  return (
    <svg className={svgIconStyle} aria-hidden="true">
      <use href={`#icon-${icon}`} fill={color} />
    </svg>
  );
};

export default SvgIcon;
