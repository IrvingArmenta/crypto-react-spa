import * as Index from './index';
import * as Hooks from '@/api/hooks';
import { render, screen, waitFor } from '@testing-library/react';
import { mockOhlcData } from './CoinDetails/mockData';
import type { GetOhlcUriFrontendReturnType } from '@/api/types';

jest.mock('react-apexcharts', () => jest.fn(() => <></>));

jest.mock('./CoinDetails/CompaniesTable', () => jest.fn(() => <></>));

export const mockChartData: GetOhlcUriFrontendReturnType = {
  series: [
    {
      data: mockOhlcData
    }
  ],
  latestPrice: '0.0554',
  isNegative: false
};

const useOHLCDataSpy = jest.spyOn(Hooks, 'useGetOHLCData');

jest.mock('wouter', () => ({
  Link: jest.fn(() => <></>)
}));

describe('@/views/index', () => {
  it('should call lazy function with the expected parameters for Discover view', async () => {
    render(<Index.Discover />);

    await waitFor(() => screen);

    await screen.findByTestId('discover-wrap');

    expect(screen.getByTestId('discover-wrap')).toBeInTheDocument();
  });

  it('should call lazy function with the expected parameters for Error404 view', async () => {
    render(<Index.Error404 />);

    await waitFor(() => screen);

    await screen.findByTestId('error-404-wrap');

    expect(screen.getByTestId('error-404-wrap')).toBeInTheDocument();
  });

  it('should call lazy function with the expected parametersxxx', async () => {
    useOHLCDataSpy.mockImplementationOnce(() => ({
      data: mockChartData,
      isLoading: false,
      isValidating: false,
      error: undefined
    }));

    render(<Index.CoinDetails coinId="btc" />);

    await waitFor(() => screen);

    await screen.findByTestId('coin-details-header');

    expect(screen.getByTestId('coin-details-header')).toBeInTheDocument();
  });
});
