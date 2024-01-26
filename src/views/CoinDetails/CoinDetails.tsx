import { useGetOHLCData } from '@/api/hooks';
import ReactApexChart from 'react-apexcharts';
import {
  candlesticksChartOptions,
  coinDetailsTitles,
  coinLogo
} from './constants';
import { type FC } from 'react';
import { Link, Redirect } from 'wouter';
import type { CoinIdType } from '@/global-types';
import { SvgIcon } from '@/components';
import {
  apexChartWrapperStyle,
  coinDetailsBackButtonStyle,
  coinDetailsBottomButtons,
  coinDetailsBottomRow,
  coinDetailsHeaderWrapStyle,
  coinDetailsTitleWrapStyle
} from './CoinDetails.style';
import { css } from '@style/css';
import CompaniesTable from './CompaniesTable';

export type CoinDetailsPropsType = {
  coinId: CoinIdType;
};

/**
 * Renders a detailed view for a specific coin, showcasing its price, logo, and OHLC chart.
 *
 * @remarks
 *   - Fetches OHLC data using the `useGetOHLCData` hook.
 *   - Redirects to the BTC details page if an unsupported coin ID is provided.
 *   - Displays a back button, coin logo, title, latest price, and currency pair.
 *   - Renders an interactive candlestick chart using ReactApexChart.
 *
 * @param {CoinDetailsPropsType} props - Component props
 * @prop {CoinIdType} coinId - The ID of the coin to display details for.
 */
const CoinDetails: FC<CoinDetailsPropsType> = (props) => {
  const { coinId } = props;
  const { data } = useGetOHLCData(coinId);

  if (!data || !coinId) {
    return null;
  }

  if (coinId !== 'eth' && coinId !== 'btc') {
    return <Redirect to="/coin-details/btc" />;
  }

  return (
    <div
      className={css({
        height: '100%',
        padding: { sm: '8px', md: '16px' },
        display: 'flex',
        flexDir: 'column',
        overflow: 'hidden'
      })}
    >
      <header
        className={coinDetailsHeaderWrapStyle}
        data-testid="coin-details-header"
      >
        <Link href="/">
          <a className={coinDetailsBackButtonStyle}>
            <SvgIcon
              icon="chevron"
              cssProp={css.raw({
                rotate: '180deg',
                width: { md: '1.5rem', sm: '1rem' }
              })}
            />
          </a>
        </Link>
        <h2 className={coinDetailsTitleWrapStyle}>
          <div>
            <SvgIcon
              cssProp={css.raw({ width: '3rem', flexShrink: 0 })}
              icon={coinLogo[coinId]}
            />
            {coinDetailsTitles[coinId]}
          </div>
          <span data-is-negative={data.isNegative}>
            {data.latestPrice}
            <span>{coinId === 'btc' ? 'eth' : 'btc'}</span>
          </span>
        </h2>
      </header>
      <div className={apexChartWrapperStyle}>
        <ReactApexChart
          options={candlesticksChartOptions}
          series={data.series}
          type="candlestick"
          height="100%"
          id="crypto-chart"
        />
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={css({
            color: 'positiveGreen',
            filter: 'brightness(0.6)',
            _hover: { filter: 'brightness(1.1)' }
          })}
        >
          Data from CoinGecko
        </a>
      </div>
      <CompaniesTable coinId={coinId} />
      <footer className={coinDetailsBottomRow}>
        <button type="button">
          <SvgIcon
            icon="robot-img"
            cssProp={css.raw({ width: { md: '5rem', base: '14vw' } })}
          />
          <span>Trading Bot</span>
        </button>
        <div className={coinDetailsBottomButtons}>
          <button type="button">Buy</button>
          <button type="button">Sell</button>
        </div>
      </footer>
    </div>
  );
};

export default CoinDetails;
