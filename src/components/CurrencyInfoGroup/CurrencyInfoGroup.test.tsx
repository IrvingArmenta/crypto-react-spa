import { render, screen } from '@testing-library/react';
import CurrencyInfoGroup from './CurrencyInfoGroup';
import CurrencyInfoBlock from './CurrencyInfoBlock';
import { type CurrencyInfoBlockPropsType } from './CurrencyInfoBlock';

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

const mockCurrencyInfoBlock: CurrencyInfoBlockPropsType = {
  title: 'Some Cool Title',
  currentValue: '4023.34',
  percentageDiff: '-4.05%'
};

jest.mock('./CurrencyInfoBlock', () => jest.fn(() => <div>block</div>));

describe('@components/CurrencyInfoGroup.tsx', () => {
  it('should render the component with the expected number of items and expected props', () => {
    render(
      <CurrencyInfoGroup currencyDataBlocks={mockCurrencyInfoGroupBlocks} />
    );

    const blocks = screen.queryAllByText('block');

    expect(blocks).toHaveLength(mockCurrencyInfoGroupBlocks.length);

    expect(CurrencyInfoBlock).toHaveBeenNthCalledWith(
      1,
      mockCurrencyInfoGroupBlocks[0],
      {}
    );

    expect(CurrencyInfoBlock).toHaveBeenNthCalledWith(
      2,
      mockCurrencyInfoGroupBlocks[1],
      {}
    );

    expect(CurrencyInfoBlock).toHaveBeenNthCalledWith(
      3,
      mockCurrencyInfoGroupBlocks[2],
      {}
    );
  });

  it.each`
    condition                  | errorText                                                                     | data
    ${'is empty'}              | ${'CurrencyInfoGroup: currencyDataBlocks array is empty'}                     | ${[]}
    ${'has more than 3 items'} | ${'CurrencyInfoGroup: currencyDataBlocks array length cannot be more than 3'} | ${[...mockCurrencyInfoGroupBlocks, mockCurrencyInfoBlock]}
  `(
    'should throw error when the list $condition with $errorText as message ',
    ({
      errorText,
      data
    }: {
      errorText: string;
      data: CurrencyInfoBlockPropsType[];
    }) => {
      jest.spyOn(global.console, 'error').mockImplementation();

      expect(() =>
        render(<CurrencyInfoGroup currencyDataBlocks={data} />)
      ).toThrow(errorText);
    }
  );
});
