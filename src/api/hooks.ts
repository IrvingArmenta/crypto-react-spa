import useSWR from 'swr';
import { GET_SIMPLE_PRICE_URI } from './config';
import { fetchSimplePrices } from './index';

export function useGetSimplePrice() {
  const { data, isLoading, isValidating } = useSWR(
    GET_SIMPLE_PRICE_URI,
    fetchSimplePrices
  );

  return { data, isLoading, isValidating };
}
