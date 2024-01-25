import useSWR from 'swr';
import { GET_SIMPLE_PRICE_URI } from './config';
import { fetchOHLC, fetchSimplePrices } from './index';
import type { CoinIdType } from '@/global-types';

export function useGetSimplePriceData() {
  const { data, isLoading, isValidating, error } = useSWR(
    GET_SIMPLE_PRICE_URI,
    fetchSimplePrices
  );

  return { data, isLoading, isValidating, error: error as Error };
}

export function useGetOHLCData(coinId: CoinIdType) {
  const fetchKey = `get/ohlc/${coinId}`;

  const { data, isLoading, isValidating } = useSWR(
    [fetchKey, coinId],
    ([, coinId]) => fetchOHLC(coinId)
  );

  return { data, isLoading, isValidating };
}
