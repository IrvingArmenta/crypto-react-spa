import useSWR from 'swr';
import { GET_SIMPLE_PRICE_URI } from './config';
import { fetchOHLC, fetchSimplePrices } from './index';
import type { CoinIdType } from '@/global-types';

/**
 * Fetches and manages simple price data for Bitcoin and Ethereum using SWR.
 *
 * @returns An object containing:
 *   - data: The fetched price data, or undefined if loading or failed.
 *   - isLoading: A boolean indicating if data is being fetched.
 *   - isValidating: A boolean indicating if data is being revalidated.
 *   - error: Any error that occurred during fetching, or undefined if successful.
 */
export function useGetSimplePriceData() {
  const { data, isLoading, isValidating, error } = useSWR(
    GET_SIMPLE_PRICE_URI,
    fetchSimplePrices
  );

  return { data, isLoading, isValidating, error: error as Error | undefined };
}

/**
 * Fetches and manages OHLC data for a specified coin using SWR.
 *
 * @param coinId - The ID of the coin to fetch data for ('btc' or 'eth').
 * @returns An object containing:
 *   - data: The fetched OHLC data, or undefined if loading or failed.
 *   - isLoading: A boolean indicating if data is being fetched.
 *   - isValidating: A boolean indicating if data is being revalidated.
 */
export function useGetOHLCData(coinId: CoinIdType) {
  const fetchKey = `get/ohlc/${coinId}`;

  const { data, isLoading, isValidating } = useSWR(
    [fetchKey, coinId],
    ([, coinId]) => fetchOHLC(coinId)
  );

  return { data, isLoading, isValidating };
}
