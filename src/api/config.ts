import { getEnv } from '@/utils/getEnv';

export const apiKey = getEnv().isDevelopment
  ? undefined
  : process.env.GECKO_COIN_API;

export const fetchHeaderWithKey: RequestInit | undefined = getEnv()
  .isDevelopment
  ? undefined
  : {
      headers: {
        'x-cg-demo-api-key': apiKey || '$$$$$$$'
      }
    };

export const API_BASE_URI = getEnv().isDevelopment
  ? ('http://localhost:3001' as const)
  : ('https://api.coingecko.com/api/v3' as const);

export const GET_SIMPLE_PRICE_URI = getEnv().isDevelopment
  ? `${API_BASE_URI}/api/simple-prices`
  : `${API_BASE_URI}/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_change=true&precision=2`;
