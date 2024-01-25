import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Discover from './Discover';

jest.mock('@/components', () => ({
  ChevronTitle: jest.fn(() => <></>),
  ComparisonBar: jest.fn(() => <></>),
  IconsNavBar: jest.fn(() => <></>),
  CurrencyInfoGroup: jest.fn(() => <></>),
  CoinHeatPrices: jest.fn(() => <></>),
  LoadingSvg: jest.fn(() => <></>)
}));

describe('Discover.tsx', () => {
  it('should render the component with no isssues', async () => {
    render(<Discover />);

    const wrapper = screen.queryByTestId('discover-wrap');
    await waitFor(() => wrapper);

    expect(wrapper).toBeInTheDocument();
  });
});
