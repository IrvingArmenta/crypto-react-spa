import { currencyFormat } from '@/utils/currencyFormat';
import { GetPriceUriFrontendReturnType, GetPriceUriReturnType } from './types';
import { fetchHeaderWithKey, GET_SIMPLE_PRICE_URI } from './config';

export const fetchSimplePrices = async () => {
  const response = await fetch(GET_SIMPLE_PRICE_URI, fetchHeaderWithKey);
  const json = (await response.json()) as GetPriceUriReturnType | undefined;

  if (!json) {
    throw new Error(
      `Something went wrong with ${GET_SIMPLE_PRICE_URI} request`
    );
  }

  const frontEndReturn: GetPriceUriFrontendReturnType = {
    btc: {
      price: currencyFormat(json.bitcoin.usd),
      percentageDiff24h: `${json.bitcoin.usd_24h_change.toFixed(2)}%`
    },
    eth: {
      price: currencyFormat(json.ethereum.usd),
      percentageDiff24h: `${json.ethereum.usd_24h_change.toFixed(2)}%`
    }
  };

  return frontEndReturn;
};
