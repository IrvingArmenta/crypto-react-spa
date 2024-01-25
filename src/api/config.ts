import { getEnv } from '@/utils/getEnv';

const API_KEY = getEnv().isDevelopment ? undefined : process.env.GECKO_COIN_API;

const FETCH_HEADER: RequestInit | undefined = getEnv().isDevelopment
  ? undefined
  : {
      headers: {
        'x-cg-demo-api-key': API_KEY || ''
      }
    };

const API_BASE_URI = getEnv().isDevelopment
  ? (`http://localhost:3001` as const)
  : ('https://api.coingecko.com/api/v3' as const);

export const GET_SIMPLE_PRICE_URI = getEnv().isDevelopment
  ? (`${API_BASE_URI}/api/simple-prices` as const)
  : (`${API_BASE_URI}/simple/price?ids=bitcoin%2Cethereum&vs_currencies=eth%2Cbtc&include_market_cap=false&include_24hr_change=true&precision=4` as const);

export const GET_OHLC_URI_BTCETH = getEnv().isDevelopment
  ? (`${API_BASE_URI}/api/ohlc/btc` as const)
  : (`${API_BASE_URI}/coins/bitcoin/ohlc?vs_currency=eth&days=7&precision=4` as const);

export const GET_OHLC_URI_ETHBTC = getEnv().isDevelopment
  ? (`${API_BASE_URI}/api/ohlc/eth` as const)
  : (`${API_BASE_URI}/coins/ethereum/ohlc?vs_currency=btc&days=7&precision=4` as const);

const config = {
  FETCH_HEADER,
  GET_SIMPLE_PRICE_URI,
  GET_OHLC_URI_BTCETH,
  GET_OHLC_URI_ETHBTC
};

export { config };
