import { render, screen } from '@testing-library/react';
import CoinDetails from './CoinDetails';
import { GetOhlcUriFrontendReturnType } from '@/api/types';
import { mockOhlcData } from './mockData';
import * as Hooks from '@/api/hooks';
import { Redirect } from 'wouter';
import { CoinIdType } from '@/global-types';
import CompaniesTable from './CompaniesTable';
import { candlesticksChartOptions } from './constants';

jest.mock('react-apexcharts', () => jest.fn(() => <></>));

jest.mock('./CompaniesTable', () => jest.fn(() => <></>));

const mockChartData: GetOhlcUriFrontendReturnType = {
  series: [
    {
      data: mockOhlcData
    }
  ],
  latestPrice: '18.423',
  isNegative: false
};

const mockGetOHLCReturn: ReturnType<typeof Hooks.useGetOHLCData> = {
  data: mockChartData,
  isLoading: false,
  isValidating: false,
  error: undefined
};

const useGetOHLCDataSpy = jest.spyOn(Hooks, 'useGetOHLCData');

jest.mock('@/components', () => ({
  SvgIcon: jest.fn(() => <></>)
}));

jest.mock('wouter', () => ({
  Link: jest.fn(({ children }) => <>{children}</>),
  Redirect: jest.fn(() => {
    Object.defineProperty(window, 'location', {
      get: jest.fn().mockReturnValue({ pathname: '/coin-details/btc' })
    });
    return <></>;
  })
}));

describe('CoinDetails.tsx', () => {
  it('should render the component as expected when data is fetched correctly', () => {
    useGetOHLCDataSpy.mockReturnValueOnce({ ...mockGetOHLCReturn });

    render(<CoinDetails coinId="btc" />);

    expect(screen.getByTestId('coin-details-header')).toBeInTheDocument();
  });

  it('should return an empty element when data is not fetched correctly', () => {
    useGetOHLCDataSpy.mockReturnValueOnce({
      ...mockGetOHLCReturn,
      data: undefined
    });

    const { container } = render(<CoinDetails coinId="btc" />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should redirect to /coin-details/btc when coinId is not btc or eth', () => {
    useGetOHLCDataSpy.mockReturnValueOnce({ ...mockGetOHLCReturn });
    render(<CoinDetails coinId={'xxx' as 'btc'} />);

    expect(Redirect).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/coin-details/btc');
  });

  it.each`
    coinId   | expectedCoinSuffix
    ${'btc'} | ${'eth'}
    ${'eth'} | ${'btc'}
  `(
    'should render $expectedCoinSuffix as the coin suffix when coinId is $coinId',
    async ({
      coinId,
      expectedCoinSuffix
    }: {
      coinId: CoinIdType;
      expectedCoinSuffix: CoinIdType;
    }) => {
      useGetOHLCDataSpy.mockReturnValueOnce({ ...mockGetOHLCReturn });
      render(<CoinDetails coinId={coinId} />);

      expect(screen.getByText(expectedCoinSuffix)).toBeInTheDocument();
    }
  );

  it('should call CompaniesTable with the expected prop', () => {
    useGetOHLCDataSpy.mockReturnValueOnce({ ...mockGetOHLCReturn });
    render(<CoinDetails coinId="eth" />);

    expect(CompaniesTable).toHaveBeenCalledWith({ coinId: 'eth' }, {});
  });

  test('candlesticksChartOptions format functions should work as expected', () => {
    const result = candlesticksChartOptions.yaxis.labels.formatter(10);

    expect(result).toBe('10.0000');
  });
});
