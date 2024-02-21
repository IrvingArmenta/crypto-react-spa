import {
  GetCompaniesUriFrontendReturnType,
  GetCompaniesUriReturnType,
  GetOhlcUriFrontendReturnType,
  GetOhlcUriReturnType,
  GetPriceUriFrontendReturnType,
  GetPriceUriReturnType
} from './types';
import { config } from './config';
import type { CoinIdType } from '@/global-types';
import { currencyFormat } from '@/utils/currencyFormat';

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

/**
 * Fetches OHLC (Open, High, Low, Close) price data for Bitcoin or Ethereum.
 *
 * @param coinId - The ID of the coin to fetch data for ('btc' or 'eth').
 * @returns An object containing:
 *   - series: An array of OHLC data points for charting.
 *   - latestPrice: The latest close price as a string.
 *   - isNegative: A boolean indicating a negative price trend.
 * @throws Error if the API request fails or the response is invalid.
 */
export const fetchOHLC = async (coinId: CoinIdType) => {
  const URI =
    coinId === 'btc' ? config.GET_OHLC_URI_BTCETH : config.GET_OHLC_URI_ETHBTC;

  const response = await fetch(URI, config.FETCH_HEADER);

  const json = (await response.json()) as string | undefined;

  if (!json) {
    throw new Error(`Something went wrong with ${URI} request`);
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

/**
 * Fetches company holdings data for a given coin ID from an external API.
 *
 * @param coinId - The ID of the coin for which to retrieve holdings data.
 * @returns A promise that resolves with an object containing the following properties:
 *   - totalHoldings: The total holdings of the coin for all companies.
 *   - totalValueUSD: The total value of the holdings in USD, formatted as a string.
 *   - companies: An array of up to 7 companies, each with the following properties:
 *      - name: The name of the company.
 *      - totalHoldings: The total holdings of the coin for the company.
 *      - totalCurrentValueUsd: The total current value of the holdings in USD, formatted as a string.
 *      - country: The country in which the company is located.
 */
export const fetchCompaniesHoldings = async (coinId: CoinIdType) => {
  try {
    const URI =
      coinId === 'btc'
        ? config.GET_COMPANY_URI_BTC
        : config.GET_COMPANY_URI_ETH;

    const response = await fetch(URI, config.FETCH_HEADER);

    const json = (await response.json()) as string;

    if (!json) {
      throw new Error(`Something went wrong with ${URI} request`);
    }

    const { total_value_usd, total_holdings, companies } =
      json as unknown as GetCompaniesUriReturnType;

    const frontendData: GetCompaniesUriFrontendReturnType = {
      totalHoldings: total_holdings,
      totalValueUSD: currencyFormat(total_value_usd),
      companies: companies.slice(0, 5).map((company) => ({
        name: company.name,
        totalHoldings: company.total_holdings,
        totalCurrentValueUsd: currencyFormat(company.total_current_value_usd),
        country: company.country
      }))
    };

    return frontendData;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};
