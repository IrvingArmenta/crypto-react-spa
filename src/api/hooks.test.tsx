import { renderHook } from '@testing-library/react-hooks/native';
import fetchMock from 'jest-fetch-mock';
import { SWRConfig } from 'swr';
import {
  useGetCompaniesData,
  useGetOHLCData,
  useGetSimplePriceData
} from './hooks';
import { FC, ReactNode } from 'react';
import {
  mockChartData,
  mockGetCompaniesData,
  mockGetCompaniesResponse,
  mockGetSimplePriceData,
  mockOhlcData,
  mockSimplePricesResponse
} from './mockData';
import * as SWR from 'swr';
import { waitFor } from '@testing-library/react';
import { GET_SIMPLE_PRICE_URI, config } from './config';
import { CoinIdType } from '@/global-types';

const useSwrMock = jest.spyOn(SWR, 'default');

beforeEach(() => {
  fetchMock.resetMocks();
});

const SwrConfigWrap: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        errorRetryInterval: 0,
        errorRetryCount: 0,
        dedupingInterval: 0,
        provider: () => new Map()
      }}
    >
      {children}
    </SWRConfig>
  );
};

describe('api/hooks', () => {
  describe('useGetSimplePriceData', () => {
    it('should call useSWR hook with the expected parameters and return the expected success data', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockSimplePricesResponse));

      const { result, waitForNextUpdate } = renderHook(
        () => useGetSimplePriceData(),
        {
          wrapper: SwrConfigWrap
        }
      );

      await waitForNextUpdate();

      expect(useSwrMock).toHaveBeenCalled();

      expect(result.current).toEqual({
        data: mockGetSimplePriceData,
        isLoading: false,
        isValidating: false,
        error: undefined
      });
    });

    it('should call useSWR hook with the expected parameters and return the expected error', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(''));

      const { result } = renderHook(() => useGetSimplePriceData(), {
        wrapper: SwrConfigWrap
      });

      expect(useSwrMock).toHaveBeenCalled();

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current).toEqual({
        data: undefined,
        isLoading: false,
        isValidating: false,
        error: new Error(
          `Something went wrong with ${GET_SIMPLE_PRICE_URI} request`
        )
      });
    });
  });

  describe('useGetOHLCData', () => {
    it.each(['btc', 'eth'])(
      'should call useSWR hook with the expected parameters and the coin type %s and return the expected success data',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(mockOhlcData));

        const { result, waitForNextUpdate } = renderHook(
          () => useGetOHLCData(coinId as CoinIdType),
          {
            wrapper: SwrConfigWrap
          }
        );

        await waitForNextUpdate();

        expect(useSwrMock).toHaveBeenCalled();

        expect(result.current).toEqual({
          data: mockChartData,
          isLoading: false,
          isValidating: false,
          error: undefined
        });
      }
    );

    it.each(['btc', 'eth'])(
      'should call useSWR hook with the expected parameters and coin type %s and return the expected error',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(''));

        const URI =
          coinId === 'btc'
            ? config.GET_OHLC_URI_BTCETH
            : config.GET_OHLC_URI_ETHBTC;

        const { result, waitForNextUpdate } = renderHook(
          () => useGetOHLCData(coinId as CoinIdType),
          {
            wrapper: SwrConfigWrap
          }
        );

        await waitForNextUpdate();

        expect(useSwrMock).toHaveBeenCalled();

        await waitFor(() => expect(result.current.isLoading).toBe(false));

        expect(result.current).toEqual({
          data: undefined,
          isLoading: false,
          isValidating: false,
          error: new Error(`Something went wrong with ${URI} request`)
        });
      }
    );
  });

  describe('useGetCompaniesData', () => {
    it.each(['btc', 'eth'])(
      'should call useSWR hook with the expected parameters and the coin type %s and return the expected success data',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(mockGetCompaniesResponse));

        const { result, waitForNextUpdate } = renderHook(
          () => useGetCompaniesData(coinId as CoinIdType),
          {
            wrapper: SwrConfigWrap
          }
        );

        await waitForNextUpdate();

        expect(useSwrMock).toHaveBeenCalled();

        expect(result.current).toEqual({
          data: mockGetCompaniesData,
          isLoading: false,
          isValidating: false,
          error: undefined
        });
      }
    );

    it.each(['btc', 'eth'])(
      'should call useSWR hook with the expected parameters and coin type %s and return the expected error',
      async (coinId) => {
        fetchMock.mockResponseOnce(JSON.stringify(''));

        const URI =
          coinId === 'btc'
            ? config.GET_COMPANY_URI_BTC
            : config.GET_COMPANY_URI_ETH;

        const { result, waitForNextUpdate } = renderHook(
          () => useGetCompaniesData(coinId as CoinIdType),
          {
            wrapper: SwrConfigWrap
          }
        );

        await waitForNextUpdate();

        expect(useSwrMock).toHaveBeenCalled();

        await waitFor(() => expect(result.current.isLoading).toBe(false));

        expect(result.current).toEqual({
          data: undefined,
          isLoading: false,
          isValidating: false,
          error: new Error(`Something went wrong with ${URI} request`)
        });
      }
    );
  });
});

afterAll(() => {
  fetchMock.disableMocks(); // Disable mocking after all tests
});
