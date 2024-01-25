import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ComparisonBar, { type ComparisonBarPropsType } from './ComparisonBar';

const mockComparisonBarProps: ComparisonBarPropsType = {
  negativeSide: {
    value: 30,
    label: 'Something Negative'
  },
  positiveSide: {
    value: 70,
    label: 'Something Positive'
  }
};

const mockStyleVariables = {
  '--positive-bar-width': `calc(${mockComparisonBarProps.positiveSide.value}% - 8px)`,
  '--negative-bar-width': `calc(${mockComparisonBarProps.negativeSide.value}% - 8px)`
};

describe('@components/IconsNavBar.tsx', () => {
  it('should render the component with the expected number of items', () => {
    render(<ComparisonBar {...mockComparisonBarProps} />);

    const wrap = screen.getByTestId('comparison-bar-wrap');

    expect(wrap).toBeInTheDocument();
  });

  it('should render div with the style variables with the expected values', () => {
    render(<ComparisonBar {...mockComparisonBarProps} />);

    const divPresentation = screen.getByRole('presentation');

    expect(divPresentation).toBeInTheDocument();
    expect(divPresentation).toHaveStyle(mockStyleVariables);
  });
});
