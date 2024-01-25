import useSWR from 'swr';
import { GET_SIMPLE_PRICE_URI } from './config';
import { fetchCompaniesHoldings, fetchOHLC, fetchSimplePrices } from './index';
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

/**
 * Fetches and manages data for companies associated with a given coin ID.
 *
 * @param coinId - The ID of the coin for which to retrieve company data.
 * @returns An object containing the following properties:
 *   - data: The fetched company data, if available.
 *   - isLoading: A boolean indicating whether data is currently being fetched.
 *   - isValidating: A boolean indicating whether the fetched data is being validated.
 * */
export function useGetCompaniesData(coinId: CoinIdType) {
  const fetchKey = `get/companies/${coinId}`;

  const { data, isLoading, isValidating } = useSWR(
    [fetchKey, coinId],
    ([, coinId]) => fetchCompaniesHoldings(coinId)
  );

  return { data, isLoading, isValidating };
}
