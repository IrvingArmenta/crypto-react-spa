import {
  ChevronTitle,
  CurrencyInfoGroup,
  ComparisonBar,
  IconNavBar
} from '@/components';
import {
  discoverBlockStartVerticalSpacingStyle,
  discoverBodyWrapStyle
} from './Discover.style';
import { mockCurrencyInfoGroupBlocks } from './constants';
import { css } from '@style/css';
import CoinHeatPrices from './components/CoinHeatPrices';

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
      <CoinHeatPrices />
      <ChevronTitle
        text="Hot List"
        cssProp={css.raw({ marginBlockStart: '16px' })}
      />
      <ComparisonBar
        cssProp={css.raw({ marginBlockStart: '24px' })}
        positiveSide={{ value: 3, label: 'Up 3' }}
        negativeSide={{ value: 17, label: 'Down 17' }}
      />
      <IconNavBar />
    </div>
  );
};

export default Discover;
