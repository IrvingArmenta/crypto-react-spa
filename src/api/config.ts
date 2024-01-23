import { getEnv } from '@/utils/getEnv';

const API_KEY = getEnv().isDevelopment ? undefined : process.env.GECKO_COIN_API;

const FETCH_HEADER: RequestInit | undefined = getEnv().isDevelopment
  ? undefined
  : {
      headers: {
        'x-cg-demo-api-key': API_KEY || '$$$$$$$'
      }
    };

const API_BASE_URI = getEnv().isDevelopment
  ? ('http://localhost:3001' as const)
  : ('https://api.coingecko.com/api/v3' as const);

export const GET_SIMPLE_PRICE_URI = getEnv().isDevelopment
  ? (`${API_BASE_URI}/api/simple-prices` as const)
  : (`${API_BASE_URI}/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_change=true&precision=2` as const);

const config = {
  FETCH_HEADER,
  GET_SIMPLE_PRICE_URI
};

export { config };
