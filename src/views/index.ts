import { lazy } from 'react';

const Discover = lazy(() => import('./Discover/Discover'));
const CoinDetails = lazy(() => import('./CoinDetails/CoinDetails'));
const Error404 = lazy(() => import('./error404'));

export { Discover, CoinDetails, Error404 };
