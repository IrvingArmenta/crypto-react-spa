import fetchMock from 'jest-fetch-mock'; // Import jest-fetch-mock
import {
  GetOhlcUriFrontendReturnType,
  GetPriceUriFrontendReturnType,
  GetPriceUriReturnType
} from './types';
import { mockOhlcData } from './mockData';
import { fetchOHLC, fetchSimplePrices } from './index';
import { CoinIdType } from '@/global-types';
import { config } from './config';

fetchMock.enableMocks(); // Enable mocking globally;

beforeEach(() => {
  fetchMock.resetMocks(); // Clear any previous mocks before each test
});

const mockChartData: GetOhlcUriFrontendReturnType = {
  series: [
    {
      data: mockOhlcData
    }
  ],
  latestPrice: '0.0554',
  isNegative: false
};

const mockSimplePricesResponse: GetPriceUriReturnType = {
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

const mockGetSimplePriceData: GetPriceUriFrontendReturnType = {
  btc: {
    price: '0.9842',
    percentageDiff24h: '0.4231%'
  },
  eth: {
    price: '17.422',
    percentageDiff24h: '-2.2340%'
  }
};

describe('api/fetch functions', () => {
  describe('fetchSimplePrices', () => {
    it('fetches data successfully', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockSimplePricesResponse));

      const data = await fetchSimplePrices();

      expect(data).toEqual(mockGetSimplePriceData);
    });

    it('should return error message if json response is falsy', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(''));

      await expect(fetchSimplePrices()).rejects.toThrow(
        'Something went wrong with https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=eth%2Cbtc&include_market_cap=false&include_24hr_change=true&precision=4 request'
      );
    });
  });

  describe('fetchOHLC', () => {
    it.each(['btc', 'eth'])(
      'fetches data successfully for coinId: %s',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(mockOhlcData));

        const data = await fetchOHLC(coinId as CoinIdType);

        expect(data).toEqual(mockChartData);
      }
    );

    it.each(['btc', 'eth'])(
      'should return the expected error message for %s if json response is falsy',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(''));
        const URI = {
          btc: config.GET_OHLC_URI_BTCETH,
          eth: config.GET_OHLC_URI_ETHBTC
        }[coinId];

        await expect(fetchOHLC(coinId as CoinIdType)).rejects.toThrow(
          `Something went wrong with ${URI} request`
        );
      }
    );
  });
});

afterAll(() => {
  fetchMock.disableMocks(); // Disable mocking after all tests
});
