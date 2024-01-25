import {
  GetOhlcUriFrontendReturnType,
  GetOhlcUriReturnType,
  GetPriceUriFrontendReturnType,
  GetPriceUriReturnType
} from './types';
import { config } from './config';
import { CoinIdType } from '@/global-types';

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
      price: `${bitcoin.eth}`,
      percentageDiff24h: `${bitcoin.eth_24h_change.toFixed(4)}%`
    },
    eth: {
      price: `${ethereum.btc}`,
      percentageDiff24h: `${ethereum.btc_24h_change.toFixed(4)}%`
    }
  };

  return frontEndReturn;
};

export const fetchOHLC = async (coinId: CoinIdType) => {
  const response = await fetch(
    coinId === 'btc' ? config.GET_OHLC_URI_BTCETH : config.GET_OHLC_URI_ETHBTC,
    config.FETCH_HEADER
  );

  const json = (await response.json()) as string | undefined;

  if (!json) {
    throw new Error(
      `Something went wrong with ${config.GET_SIMPLE_PRICE_URI} request`
    );
  }

  const dataArray = json as unknown as GetOhlcUriReturnType;

  const latestClosePrice = dataArray[dataArray.length - 1][4];
  const latestOpenPrice = dataArray[dataArray.length - 1][1];
  const isNegative = latestOpenPrice > latestClosePrice;

  const frontendData: GetOhlcUriFrontendReturnType = {
    series: [
      {
        data: dataArray
      }
    ],
    latestPrice: `${latestClosePrice}`,
    isNegative
  };

  return frontendData;
};
