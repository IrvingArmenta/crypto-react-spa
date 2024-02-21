import { render, screen } from '@testing-library/react';
import * as Hooks from '@/api/hooks';
import CoinHeatPrices from './CoinHeatPrices';
import type { GetPriceUriFrontendReturnType } from '@/api/types';

jest.mock('@/components', () => ({
  ChevronTitle: jest.fn(() => <></>),
  ComparisonBar: jest.fn(() => <></>),
  IconsNavBar: jest.fn(() => <></>),
  CurrencyInfoGroup: jest.fn(() => <></>),
  CoinHeatPrices: jest.fn(() => <></>),
  LoadingSvg: jest.fn(() => <></>)
}));

jest.mock('wouter', () => ({
  Link: jest.fn(({ children }) => <>{children}</>)
}));

const mockGetSimplePriceData: GetPriceUriFrontendReturnType = {
  btc: {
    price: '19.042',
    percentageDiff24h: '1.43323'
  },
  eth: {
    price: '0.830',
    percentageDiff24h: '-2.34'
  }
};

const mockHookReturn: ReturnType<typeof Hooks.useGetSimplePriceData> = {
  data: mockGetSimplePriceData,
  isLoading: false,
  isValidating: false,
  error: undefined
};

const useGetSimplePriceDataSpy = jest.spyOn(Hooks, 'useGetSimplePriceData');

describe('Discover/CoinHeatPrices.tsx', () => {
  it('should render the component correctly when data was fetched correctly and is defined', () => {
    useGetSimplePriceDataSpy.mockImplementationOnce(() => mockHookReturn);
    render(<CoinHeatPrices />);

    const wrapper = screen.queryByTestId('coin-heat-wrap');

    expect(wrapper).toBeInTheDocument();
  });

  it('should render the loading component when data is undefined and isLoading is true', () => {
    useGetSimplePriceDataSpy.mockImplementationOnce(() => ({
      ...mockHookReturn,
      data: undefined,
      isLoading: true
    }));
    render(<CoinHeatPrices />);

    expect(
      screen.getByText('Getting the latest prices...')
    ).toBeInTheDocument();
  });

  it('should render the error component when data is undefined and error is true', () => {
    useGetSimplePriceDataSpy.mockImplementationOnce(() => ({
      ...mockHookReturn,
      data: undefined,
      error: new Error('fetching error')
    }));

    render(<CoinHeatPrices />);

    expect(screen.getByText('Something went wrong...')).toBeInTheDocument();
  });
});
