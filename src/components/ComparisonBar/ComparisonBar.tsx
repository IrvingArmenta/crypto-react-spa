import {
  BARS_MAGIC_NUMBER,
  comparisonBarLabelsWrapStyle,
  comparisonBarWrapStyle,
  comparisonNegativeBarStyle,
  comparisonPositiveBarStyle
} from './ComparisonBar.style';
import type { FC } from 'react';
import { getPercentages } from './utils';
import type { SystemStyleObject } from '@style/types';
import { css, cx } from '@style/css';

type ComparisonBarSideType = {
  value: number;
  label: string;
};

export type ComparisonBarPropsType = {
  negativeSide: ComparisonBarSideType;
  positiveSide: ComparisonBarSideType;
  cssProp?: SystemStyleObject;
};

/**
 * Renders a visual comparison bar with two sides, representing positive and negative values.
 *
 * @remarks
 *   - Calculates bar widths proportionally based on provided values.
 *   - Uses CSS custom properties for dynamic styling.
 *   - Provides appropriate ARIA attributes for accessibility.
 *
 * @param {ComparisonBarPropsType} props - Component props
 * @prop {ComparisonSideType} negativeSide - Data for the negative side of the comparison.
 * @prop {ComparisonSideType} positiveSide - Data for the positive side of the comparison.
 * @prop {SystemStyleObject} [cssProp] - Additional CSS classes to apply to the component.
 */
const ComparisonBar: FC<ComparisonBarPropsType> = (props) => {
  const { negativeSide, positiveSide, cssProp } = props;

  const { positiveBarPercentage, negativeBarPercentage } = getPercentages(
    positiveSide.value,
    negativeSide.value
  );

  const styleVars = {
    '--positive-bar-width': `calc(${positiveBarPercentage}% - ${BARS_MAGIC_NUMBER}px)`,
    '--negative-bar-width': `calc(${negativeBarPercentage}% - ${BARS_MAGIC_NUMBER}px)`
  } as React.CSSProperties;

  const labelsWrapClassName = cx(
    comparisonBarLabelsWrapStyle,
    css({ fontSize: { base: '3.6vw', md: '1.4rem' } })
  );

  return (
    <div className={css(cssProp)} data-testid="comparison-bar-wrap">
      <div className={labelsWrapClassName}>
        <label>{positiveSide.label}</label>
        <label>{negativeSide.label}</label>
      </div>
      <div
        role="presentation"
        style={styleVars}
        className={comparisonBarWrapStyle}
      >
        <span className={comparisonPositiveBarStyle} aria-hidden="true" />
        <span className={comparisonNegativeBarStyle} aria-hidden="true" />
      </div>
    </div>
  );
};

export default ComparisonBar;
