import fetchMock from 'jest-fetch-mock'; // Import jest-fetch-mock
import {
  mockChartData,
  mockGetCompaniesData,
  mockGetCompaniesResponse,
  mockGetSimplePriceData,
  mockOhlcData,
  mockSimplePricesResponse
} from './mockData';
import { fetchOHLC, fetchSimplePrices, fetchCompaniesHoldings } from './index';
import { CoinIdType } from '@/global-types';
import { config } from './config';

fetchMock.enableMocks(); // Enable mocking globally;

beforeEach(() => {
  fetchMock.resetMocks(); // Clear any previous mocks before each test
});

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

  describe('fetchCompaniesHoldings', () => {
    it.each(['btc', 'eth'])(
      'fetches data successfully for coinId: %s',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(mockGetCompaniesResponse));

        const data = await fetchCompaniesHoldings(coinId as CoinIdType);

        expect(data).toEqual(mockGetCompaniesData);
      }
    );

    it.each(['btc', 'eth'])(
      'should return the expected error message for %s if json response is falsy',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(''));
        const URI = {
          btc: config.GET_COMPANY_URI_BTC,
          eth: config.GET_COMPANY_URI_ETH
        }[coinId];

        await expect(
          fetchCompaniesHoldings(coinId as CoinIdType)
        ).rejects.toThrow(`Something went wrong with ${URI} request`);
      }
    );
  });
});

afterAll(() => {
  fetchMock.disableMocks(); // Disable mocking after all tests
});
