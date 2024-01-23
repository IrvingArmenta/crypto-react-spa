import { CurrencyInfoBlockPropsType } from '@/components/CurrencyInfoGroup/CurrencyInfoBlock';
import type { IconsNavBarLinkType } from '@/components/IconsNavBar/IconsNavBar';

export const mockCurrencyInfoGroupBlocks: CurrencyInfoBlockPropsType[] = [
  {
    title: 'Gaudiy 30 index',
    currentValue: '9422.13',
    percentageDiff: '-1.01%'
  },
  {
    title: '24H Volume',
    currentValue: '2548.35M',
    percentageDiff: '-1.01%'
  },
  {
    title: 'USDT Lending Rate',
    currentValue: '2.56%',
    percentageDiff: '+16.67%'
  }
];

export const iconNavLinks: IconsNavBarLinkType[] = [
  {
    text: 'Home',
    icon: 'home',
    href: '#'
  },
  {
    text: 'Markets',
    icon: 'chart',
    href: '/link'
  },
  {
    text: 'Trade',
    icon: 'graph',
    href: '#'
  },
  {
    text: 'Promotions',
    icon: 'megaphone',
    href: '#'
  },
  {
    text: 'Futures',
    icon: 'money',
    href: '#'
  },
  {
    text: 'Assets',
    icon: 'copy',
    href: '#'
  }
];
