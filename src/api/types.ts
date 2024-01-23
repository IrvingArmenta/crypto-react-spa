export type GetPriceUriReturnType = {
  bitcoin: {
    usd: number;
    usd_24h_change: number;
  };
  ethereum: {
    usd: number;
    usd_24h_change: number;
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
