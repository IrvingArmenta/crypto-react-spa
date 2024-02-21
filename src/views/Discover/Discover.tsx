import {
  ChevronTitle,
  CurrencyInfoGroup,
  ComparisonBar,
  IconsNavBar
} from '@/components';
import {
  discoverBlockStartVerticalSpacingStyle,
  discoverBodyWrapStyle
} from './Discover.style';
import { iconNavLinks, mockCurrencyInfoGroupBlocks } from './constants';
import CoinHeatPrices from './components/CoinHeatPrices';
import type { FC } from 'react';
import { css } from '@style/css';
import { setTestProps } from '@/utils/setTestProps';

/**
 * Renders a comprehensive discovery section showcasing market insights and trends.
 *
 * @remarks
 *   - Organizes information using clear headings and visually appealing elements.
 *   - Highlights market sentiments with currency information blocks and comparison bars.
 *   - Draws attention to hot sectors and coin prices.
 *   - Provides a bottom navigation bar for further exploration.
 */
const Discover: FC = () => {
  return (
    <div
      {...setTestProps({ testid: 'discover-wrap' })}
      className={discoverBodyWrapStyle}
    >
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
      <IconsNavBar links={iconNavLinks} />
    </div>
  );
};

export default Discover;
