import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CurrencyInfoBlock, {
  type CurrencyInfoBlockPropsType
} from './CurrencyInfoBlock';

const mockCurrencyInfoGroupBlocks: CurrencyInfoBlockPropsType[] = [
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

describe('@/components/CurrencyInfoBlock.tsx', () => {
  it('should render the component with the expected props', () => {
    render(<CurrencyInfoBlock {...mockCurrencyInfoGroupBlocks[0]} />);

    const wrap = screen.getByRole('article');

    expect(wrap).toBeInTheDocument();
  });

  it.each`
    expectedColor      | percentageDiff | sign
    ${'positiveGreen'} | ${'+15.5'}     | ${'+'}
    ${'negativeRed'}   | ${'-15.5'}     | ${'-'}
  `(
    'should render $expectedColor when percentageDiff includes a $sign sign in it',
    ({
      expectedColor,
      percentageDiff
    }: {
      expectedColor: string;
      percentageDiff: string;
      sign: string;
    }) => {
      render(
        <CurrencyInfoBlock
          {...mockCurrencyInfoGroupBlocks[0]}
          percentageDiff={percentageDiff}
        />
      );

      const wrap = screen.getByTestId(expectedColor);

      expect(wrap).toBeInTheDocument();
    }
  );
});
