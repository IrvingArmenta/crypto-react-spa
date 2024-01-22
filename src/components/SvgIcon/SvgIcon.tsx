import type { IconNamesType } from '@/icons';
import { css } from '@style/css';
import { useMemo, type FC } from 'react';
import { svgIconRawStyle } from './SvgIcon.style';

type SvgIconPropsType = {
  icon: IconNamesType;
  color?: string;
  size?: `${number}rem`;
};

/**
 * Renders an SVG icon from a predefined icon library.
 *
 * @remarks
 *   - Uses the `<use>` element to reference external SVG icons.
 *   - Ensures visual consistency with `currentColor` fill.
 *   - Provides flexibility for custom styling with the `cssProp` option.
 *   - Embeds accessibility attributes for screen readers.
 *
 * @param {SvgIconPropsType} props - Component props
 * @prop {string} icon - The name of the icon to render.
 * @prop {object} [cssProp] - Additional CSS classes to apply to the icon.
 */
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
