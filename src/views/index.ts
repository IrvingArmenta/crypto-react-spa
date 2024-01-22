import { lazy } from 'react';

const Discover = lazy(() => import('./Discover/Discover'));
const CoinDetails = lazy(() => import('./CoinDetails/CoinDetails'));

export { Discover, CoinDetails };
