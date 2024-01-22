import { css } from '@style/css';
import type { FC } from 'react';
import { currencyInfoBlockStyle } from './CurrencyInfoBlock.style';

export type CurrencyInfoBlockPropsType = {
  title: string;
  currentValue: string;
  percentageDiff: string;
};

const CurrencyInfoBlock: FC<CurrencyInfoBlockPropsType> = (props) => {
  const { title, currentValue, percentageDiff } = props;

  const color = percentageDiff.includes('+') ? 'positiveGreen' : 'negativeRed';

  return (
    <article className={currencyInfoBlockStyle.wrap}>
      <h3 className={currencyInfoBlockStyle.title}>{title}</h3>
      <div className={currencyInfoBlockStyle.value}>{currentValue}</div>
      <span className={css(currencyInfoBlockStyle.percentage, { color })}>
        {percentageDiff}
      </span>
    </article>
  );
};

export default CurrencyInfoBlock;
