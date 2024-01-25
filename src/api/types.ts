export type GetPriceUriReturnType = {
  bitcoin: {
    eth: number;
    eth_24h_change: number;
    btc: 1;
    btc_24h_change: 0;
  };
  ethereum: {
    eth: 1;
    eth_24h_change: 0;
    btc: number;
    btc_24h_change: number;
  };
};

export type GetPriceUriFrontendReturnType = {
  btc: {
    price: string;
    percentageDiff24h: string;
  };
  eth: {
    price: string;
    percentageDiff24h: string;
  };
};

/** [TIME, OPEN, HIGH, LOW, CLOSE] */
export type GetOhlcUriReturnType = [number, number, number, number, number][];

/**
 * series: [
 *   data: [TIME, OPEN, HIGH, LOW, CLOSE][]
 * ]
 */
export type GetOhlcUriFrontendReturnType = {
  series: {
    data: [number, number, number, number, number][];
  }[];
  latestPrice: string;
  isNegative: boolean;
};
