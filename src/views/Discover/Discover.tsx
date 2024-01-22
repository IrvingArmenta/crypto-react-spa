import { ChevronTitle, CurrencyInfoGroup, ComparisonBar } from '@/components';
import {
  discoverBlockStartVerticalSpacingStyle,
  discoverBodyWrapStyle
} from './Discover.style';
import { mockCurrencyInfoGroupBlocks } from './constants';
import { css } from '@style/css';

const Discover = () => {
  return (
    <div className={discoverBodyWrapStyle}>
      <ChevronTitle text="Market Sentiments" />
      <CurrencyInfoGroup
        cssProp={discoverBlockStartVerticalSpacingStyle}
        currencyDataBlocks={mockCurrencyInfoGroupBlocks}
      />
      <ComparisonBar
        cssProp={css.raw({ marginBlockStart: '24px' })}
        positiveSide={{ value: 30, label: 'BTC buy takers 3.17 BTC' }}
        negativeSide={{ value: 70, label: 'BTC sell takers 3.58 BTC' }}
      />
      <ChevronTitle
        cssProp={css.raw({ marginBlockStart: '32px' })}
        text="Hot Sectors"
        altText="Discussions"
      />
    </div>
  );
};

export default Discover;
