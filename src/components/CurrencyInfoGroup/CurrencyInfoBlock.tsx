import type { FC } from 'react';
import { currencyInfoBlockStyleSVA } from './CurrencyInfoBlock.style';

export type CurrencyInfoBlockPropsType = {
  title: string;
  currentValue: string;
  percentageDiff: string;
};

/**
 * Renders a visual block displaying key information about a currency.
 *
 * @remarks
 *   - Highlights positive and negative percentage differences with color.
 *   - Includes data-testid attributes for testing purposes.
 *
 * @param {CurrencyInfoBlockPropsType} props - Component props
 * @prop {string} title - The title of the currency block.
 * @prop {string} currentValue - The current value of the currency.
 * @prop {string} percentageDiff - The percentage difference, indicating a positive or negative change.
 */
const CurrencyInfoBlock: FC<CurrencyInfoBlockPropsType> = (props) => {
  const { title, currentValue, percentageDiff } = props;

  const color = percentageDiff.includes('-') ? 'negativeRed' : 'positiveGreen';
  const classes = currencyInfoBlockStyleSVA({
    isNegative: percentageDiff.includes('-')
  });

  return (
    <article className={classes.wrap}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.value}>{currentValue}</div>
      <span data-testid={color} className={classes.percentage}>
        {percentageDiff}
      </span>
    </article>
  );
};

export default CurrencyInfoBlock;
