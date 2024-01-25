import { CoinIdType } from '@/global-types';
import type { ApexOptions } from 'apexcharts';

const sharedStyle = {
  fontFamily: 'inherit'
};

export const candlesticksChartOptions: ApexOptions = {
  chart: {
    type: 'candlestick'
  },
  dataLabels: {
    style: {
      ...sharedStyle
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        ...sharedStyle
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        ...sharedStyle
      },
      formatter: (n) => n.toFixed(4)
    }
  },
  grid: {
    padding: {
      top: 0,
      right: 32,
      bottom: 0,
      left: 32
    }
  },
  tooltip: {
    style: {
      ...sharedStyle
    }
  },
  legend: {
    fontFamily: sharedStyle.fontFamily
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#0dcb81',
        downward: '#f6475d'
      }
    }
  }
};

export const coinDetailsTitles = {
  btc: 'Bitcoin vs Ethereum',
  eth: 'Ethereum vs Bitcoin'
} satisfies Record<CoinIdType, string>;

export const coinLogo = {
  btc: 'bitcoin-logo',
  eth: 'ethereum-logo'
} as const satisfies Record<CoinIdType, string>;
