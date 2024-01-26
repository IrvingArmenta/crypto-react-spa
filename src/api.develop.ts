/* eslint-disable no-console */
import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { config } from './api/config';
import { CoinIdType } from './global-types';
import morgan from 'morgan';

dotenv.config();

const PORT = 3001;
const API_KEY = process.env.GECKO_COIN_API;
const GECKO_CUSTOM_HEADER = 'x-cg-demo-api-key' as const;

const app = express();
app.use(morgan('tiny'));
app.use(cors());

if (!API_KEY) {
  throw new Error('express: no api key found in the .env file');
}

/**
 * proxy route `api/simple-prices` that points to the CoinGecko api `/simple/price`
 * reference: https://www.coingecko.com/api/documentation
 */
app.get('/api/simple-prices', async (_req: Request, res: Response) => {
  try {
    const response = await fetch(config.GET_SIMPLE_PRICE_URI, {
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

/**
 * proxy route `api/ohlc/:coinId` that points to the CoinGecko api `/coins/{id}/ohlc` where `coinId` is the symbol of the coin
 * reference: https://www.coingecko.com/api/documentation
 */
app.get('/api/ohlc/:coinId', async (req: Request, res: Response) => {
  const coinId = req.params.coinId as CoinIdType;

  if (!coinId) {
    throw new Error(
      'express: coinId Parameter is necessary for this operation'
    );
  }

  try {
    const response = await fetch(
      coinId === 'btc'
        ? config.GET_OHLC_URI_BTCETH
        : config.GET_OHLC_URI_ETHBTC,
      {
        headers: {
          [GECKO_CUSTOM_HEADER]: API_KEY
        }
      }
    );

    const json = await response.json();

    res.send(json);
  } catch (e) {
    const error = e as Error;
    console.error(error.message);
  }
});

/**
 * proxy route `api/companies/:coinId` that points to the CoinGecko api `/companies/public_treasury/{coin_id}` where `coinId` is the symbol of the coin
 * reference: https://www.coingecko.com/api/documentation
 */
app.get('/api/companies/:coinId', async (req: Request, res: Response) => {
  const coinId = req.params.coinId as CoinIdType;

  if (!coinId) {
    throw new Error(
      'express: coinId Parameter is necessary for this operation'
    );
  }

  try {
    const response = await fetch(
      coinId === 'btc'
        ? config.GET_COMPANY_URI_BTC
        : config.GET_COMPANY_URI_ETH,
      {
        headers: {
          [GECKO_CUSTOM_HEADER]: API_KEY
        }
      }
    );

    const json = await response.json();

    res.send(json);
  } catch (e) {
    const error = e as Error;
    console.error(error.message);
  }
});

if (!PORT) {
  throw new Error('API_LOCAL_PORT .env value is missing');
}

app.listen(PORT, () =>
  console.log(`crypto-react-spa local server listening on port: ${PORT}`)
);
