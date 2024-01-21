import { TopNavBarPropsType } from './components/TopNavBar/TopNavBar';

export const routes = {
  Discover: '/',
  CoinDetails: '/coin-details/:coinId'
} as const;

export const mainTopNavBarLinks = [
  { href: '#', text: 'Spot' },
  { href: '#', text: 'Futures' },
  { href: '/', text: 'Discover' }
] satisfies TopNavBarPropsType['links'];
