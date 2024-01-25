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
    <div className={coinHeatPricesWrapperStyle}>
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
          <a title="Go to Bitcoin Details">
            <span className={css({ srOnly: true })}>Bitcoin Details</span>
          </a>
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
          <a title="Go to Ethereum Details">
            <span className={css({ srOnly: true })}>Ethereum Details</span>
          </a>
        </Link>
      </article>
    </div>
  );
};

export default CoinHeatPrices;
