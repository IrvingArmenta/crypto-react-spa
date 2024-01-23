import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const GECKO_CUSTOM_HEADER = 'x-cg-demo-api-key' as const;
const GECKO_API_BASE_URI = 'https://api.coingecko.com/api/v3' as const;
const GET_PRICE_URI =
  `${GECKO_API_BASE_URI}/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_change=true&precision=2` as const;

const app = express();
app.use(cors());
const apiKey = process.env.GECKO_COIN_API;

console.log();

/**
 * proxy route `api/simple-prices` that points to the CoinGecko api `/simple/price`
 * reference: https://www.coingecko.com/api/documentation
 */
app.get('/api/simple-prices', async (_req: Request, res: Response) => {
  if (!apiKey) {
    throw new Error('NO API KEY FOUND');
  }

  try {
    const response = await fetch(GET_PRICE_URI, {
      headers: {
        [GECKO_CUSTOM_HEADER]: API_KEY
      }
    });

    const json = await response.json();

    res.send(json);
  } catch (e) {
    const error = e as Error;
    console.error(error.message);
  }
});

app.listen(process.env.API_LOCAL_PORT, () =>
  console.log(
    `crypto-react-spa local server listening on: ${process.env.API_LOCAL_PORT || 3001}`
  )
);
