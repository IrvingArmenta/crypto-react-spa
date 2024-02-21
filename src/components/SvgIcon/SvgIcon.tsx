import type { IconNamesType } from '@/icons';
import { css, cx } from '@style/css';
import { type FC } from 'react';
import { svgIconStyle } from './SvgIcon.style';
import { SystemStyleObject } from '@style/types';
import { setTestProps } from '@/utils/setTestProps';

type SvgIconPropsType = {
  icon: IconNamesType;
  cssProp?: SystemStyleObject;
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
  const { icon, cssProp } = props;

  const classname = cx(svgIconStyle, css(cssProp));

  return (
    <svg className={classname} aria-hidden="true" data-testid="svg-icon">
      <use
        href={`#icon-${icon}`}
        fill="currentColor"
        {...setTestProps({ testid: 'svg-icon-use' })}
      />
    </svg>
  );
};

export default SvgIcon;
