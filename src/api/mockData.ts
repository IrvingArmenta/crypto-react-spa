import type {
  GetCompaniesUriFrontendReturnType,
  GetCompaniesUriReturnType,
  GetOhlcUriFrontendReturnType,
  GetOhlcUriReturnType,
  GetPriceUriFrontendReturnType,
  GetPriceUriReturnType
} from '@/api/types';

/**
 * OHLC data being used for unit testing
 */
export const mockOhlcData: GetOhlcUriReturnType = [
  [1705752000000, 0.0595, 0.0595, 0.0594, 0.0594],
  [1705766400000, 0.0594, 0.0594, 0.0593, 0.0593],
  [1705780800000, 0.0593, 0.0593, 0.0591, 0.0591],
  [1705795200000, 0.0591, 0.0592, 0.0591, 0.0592],
  [1705809600000, 0.0592, 0.0594, 0.0592, 0.0594],
  [1705824000000, 0.0594, 0.0594, 0.0594, 0.0594],
  [1705838400000, 0.0594, 0.0594, 0.0593, 0.0593],
  [1705852800000, 0.0593, 0.0593, 0.0592, 0.0593],
  [1705867200000, 0.0592, 0.0594, 0.0592, 0.0594],
  [1705881600000, 0.0593, 0.0593, 0.0591, 0.0591],
  [1705896000000, 0.0591, 0.0591, 0.059, 0.059],
  [1705910400000, 0.0592, 0.0592, 0.059, 0.059],
  [1705924800000, 0.059, 0.059, 0.0585, 0.0585],
  [1705939200000, 0.0584, 0.0584, 0.0581, 0.0583],
  [1705953600000, 0.0584, 0.0587, 0.0584, 0.0587],
  [1705968000000, 0.0584, 0.0584, 0.0582, 0.0582],
  [1705982400000, 0.0585, 0.0586, 0.0584, 0.0584],
  [1705996800000, 0.0585, 0.0586, 0.0585, 0.0586],
  [1706011200000, 0.0584, 0.0584, 0.0571, 0.0571],
  [1706025600000, 0.0571, 0.0571, 0.0565, 0.0566],
  [1706040000000, 0.0566, 0.0566, 0.056, 0.056],
  [1706054400000, 0.0559, 0.0564, 0.0559, 0.0564],
  [1706068800000, 0.0563, 0.0563, 0.0558, 0.0559],
  [1706083200000, 0.0559, 0.056, 0.0558, 0.056],
  [1706097600000, 0.0559, 0.056, 0.0559, 0.0559],
  [1706112000000, 0.0558, 0.0558, 0.0557, 0.0558],
  [1706126400000, 0.0558, 0.0559, 0.0557, 0.0557],
  [1706140800000, 0.0557, 0.0557, 0.0556, 0.0557],
  [1706155200000, 0.0557, 0.0557, 0.0553, 0.0553],
  [1706169600000, 0.0554, 0.0554, 0.0554, 0.0554]
];

export const mockChartData: GetOhlcUriFrontendReturnType = {
  series: [
    {
      data: mockOhlcData
    }
  ],
  latestPrice: '0.0554',
  isNegative: false
};

export const mockSimplePricesResponse: GetPriceUriReturnType = {
  bitcoin: {
    eth: 0.9842,
    eth_24h_change: 0.4231,
    btc: 1,
    btc_24h_change: 0
  },
  ethereum: {
    eth: 1,
    eth_24h_change: 0,
    btc: 17.422,
    btc_24h_change: -2.234
  }
};

export const mockGetSimplePriceData: GetPriceUriFrontendReturnType = {
  btc: {
    price: '0.9842',
    percentageDiff24h: '0.4231%'
  },
  eth: {
    price: '17.422',
    percentageDiff24h: '-2.2340%'
  }
};

export const mockGetCompaniesResponse: GetCompaniesUriReturnType = {
  total_holdings: 10000,
  total_value_usd: 10000,
  market_cap_dominance: 13000,
  companies: [
    {
      name: 'Google',
      symbol: 'G',
      country: 'US',
      total_holdings: 500,
      total_entry_value_usd: 1200,
      total_current_value_usd: 2111,
      percentage_of_total_supply: 1224
    },
    {
      name: 'Apple',
      symbol: 'AP',
      country: 'HK',
      total_holdings: 400,
      total_entry_value_usd: 1100,
      total_current_value_usd: 2111,
      percentage_of_total_supply: 1224
    }
  ]
};

export const mockGetCompaniesData: GetCompaniesUriFrontendReturnType = {
  totalHoldings: 10000,
  totalValueUSD: '$10,000.00',
  companies: [
    {
      name: 'Google',
      country: 'US',
      totalHoldings: 500,
      totalCurrentValueUsd: '$2,111.00'
    },
    {
      name: 'Apple',
      country: 'HK',
      totalHoldings: 400,
      totalCurrentValueUsd: '$2,111.00'
    }
  ]
};
