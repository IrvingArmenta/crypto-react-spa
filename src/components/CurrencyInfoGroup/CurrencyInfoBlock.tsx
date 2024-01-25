import { css } from '@style/css';
import type { FC } from 'react';
import { currencyInfoBlockStyle } from './CurrencyInfoBlock.style';

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

  const color = percentageDiff.includes('+') ? 'positiveGreen' : 'negativeRed';

  return (
    <article className={currencyInfoBlockStyle.wrap}>
      <h3 className={currencyInfoBlockStyle.title}>{title}</h3>
      <div className={currencyInfoBlockStyle.value}>{currentValue}</div>
      <span
        data-testid={color}
        className={css(currencyInfoBlockStyle.percentage, { color })}
      >
        {percentageDiff}
      </span>
    </article>
  );
};

export default CurrencyInfoBlock;
