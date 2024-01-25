import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoadingSvg } from '..';
import type { LoadingSvgPropsType } from './LoadingSvg';

const mockPallete: LoadingSvgPropsType['pallete'] = {
  color1: 'tomato',
  color2: 'rebeccapurple',
  color3: 'green'
};

describe('@components/LoadingSvg.tsx', () => {
  it('should render the component with the expected values when pallete is not defined', () => {
    render(<LoadingSvg />);

    const svg = screen.getByRole('img');

    expect(svg).toBeInTheDocument();

    expect(screen.getByTestId('path-1')).toHaveAttribute('fill', '#f6475d');
    expect(screen.getByTestId('path-2')).toHaveAttribute('fill', '#d8475a');
    expect(screen.getByTestId('path-3')).toHaveAttribute('fill', '#5a1e26');
  });
  it('should render the component with the expected values when pallete is defined', () => {
    render(<LoadingSvg pallete={mockPallete} />);

    const svg = screen.getByRole('img');

    expect(svg).toBeInTheDocument();

    expect(screen.getByTestId('path-1')).toHaveAttribute('fill', 'tomato');
    expect(screen.getByTestId('path-2')).toHaveAttribute(
      'fill',
      'rebeccapurple'
    );
    expect(screen.getByTestId('path-3')).toHaveAttribute('fill', 'green');
  });
});
