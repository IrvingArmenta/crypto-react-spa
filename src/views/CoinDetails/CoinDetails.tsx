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
  coinDetailsHeaderWrapStyle,
  coinDetailsTitleWrapStyle
} from './CoinDetails.style';
import { css } from '@style/css';

type CoinDetailsPropsType = {
  coinId: CoinIdType;
};

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
    <>
      <header className={coinDetailsHeaderWrapStyle}>
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
      </div>
    </>
  );
};

export default CoinDetails;
