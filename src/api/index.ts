import { currencyFormat } from '@/utils/currencyFormat';
import { GetPriceUriFrontendReturnType, GetPriceUriReturnType } from './types';
import { config } from './config';

/**
 * Fetches simple price data for Bitcoin and Ethereum.
 *
 * @returns An object containing:
 *   - btc: An object with price and 24h percentage change for Bitcoin.
 *   - eth: An object with price and 24h percentage change for Ethereum.
 * @throws Error if the API request fails or the response is invalid.
 */
export const fetchSimplePrices = async () => {
  const response = await fetch(
    config.GET_SIMPLE_PRICE_URI,
    config.FETCH_HEADER
  );
  const json = (await response.json()) as GetPriceUriReturnType | undefined;

  if (!json) {
    throw new Error(
      `Something went wrong with ${config.GET_SIMPLE_PRICE_URI} request`
    );
  }

  const { bitcoin, ethereum } = json;
  const frontEndReturn: GetPriceUriFrontendReturnType = {
    btc: {
      price: currencyFormat(bitcoin.usd),
      percentageDiff24h: `${bitcoin.usd_24h_change.toFixed(2)}%`
    },
    eth: {
      price: currencyFormat(ethereum.usd),
      percentageDiff24h: `${ethereum.usd_24h_change.toFixed(2)}%`
    }
  };

  return frontEndReturn;
};
