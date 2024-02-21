import {
  coinPriceBoxBTCStyle,
  coinPriceBoxETHStyle,
  coinHeatPricesWrapperStyle,
  coinHeatPricesLoadingStyle
} from './CointHeatPrices.style';
import { LoadingSvg } from '@/components';
import { css } from '@style/css';
import { useGetSimplePriceData } from '@/api/hooks';
import { Link } from 'wouter';
import type { FC } from 'react';

/**
 * Renders a concise overview of the current prices and 24h percentage changes for BTC and ETH.
 *
 * @remarks
 *   - Fetches price data using the `useGetSimplePriceData` hook.
 *   - Handles loading and error states gracefully with user-friendly messages and a loading indicator.
 *   - Displays prices, percentage changes, and links to coin details pages for BTC and ETH.
 *   - Applies appropriate styling to highlight positive or negative price movements.
 */
const CoinHeatPrices: FC = () => {
  const { data, isLoading, error } = useGetSimplePriceData();

  if (!data && error) {
    return (
      <div className={coinHeatPricesLoadingStyle}>Something went wrong...</div>
    );
  }

  if (!data && isLoading) {
    return (
      <div className={coinHeatPricesLoadingStyle}>
        <LoadingSvg />
        <p className={css({ marginInlineStart: '16px' })}>
          Getting the latest prices...
        </p>
      </div>
    );
  }

  return (
    <div className={coinHeatPricesWrapperStyle} data-testid="coin-heat-wrap">
      <article
        className={coinPriceBoxBTCStyle}
        data-is-negative={data?.btc.percentageDiff24h.includes('-')}
      >
        <h3>BTC</h3>
        <p className="price">
          {data?.btc.price}
          <span>ETH</span>
        </p>
        <span className="diff">{data?.btc.percentageDiff24h}</span>
        <Link href="/coin-details/btc">
          <span className={css({ srOnly: true })}>Bitcoin Details</span>
        </Link>
      </article>
      <article
        className={coinPriceBoxETHStyle}
        data-is-negative={data?.eth.percentageDiff24h.includes('-')}
      >
        <h3>ETH</h3>
        <p className="price">
          {data?.eth.price}
          <span>BTC</span>
        </p>
        <span className="diff">{data?.eth.percentageDiff24h}</span>
        <Link href="/coin-details/eth">
          <span className={css({ srOnly: true })}>Ethereum Details</span>
        </Link>
      </article>
    </div>
  );
};

export default CoinHeatPrices;
