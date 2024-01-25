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
import { css } from '@style/css';

type ComparisonBarSideType = {
  value: number;
  label: string;
};

type ComparisonBarPropsType = {
  negativeSide: ComparisonBarSideType;
  positiveSide: ComparisonBarSideType;
  cssProp?: SystemStyleObject;
};

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

  return (
    <div className={css(cssProp)}>
      <div className={comparisonBarLabelsWrapStyle}>
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
