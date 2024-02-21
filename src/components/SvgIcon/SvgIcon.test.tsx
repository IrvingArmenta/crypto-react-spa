import { render, screen } from '@testing-library/react';
import SvgIcon from './SvgIcon';

describe('@components/SvgIcon.tsx', () => {
  it('should render the component with the expected props', () => {
    render(<SvgIcon icon="home" />);

    const svg = screen.getByTestId('svg-icon');
    const use = screen.getByTestId('svg-icon-use');

    expect(svg).toBeInTheDocument();
    expect(use).toBeInTheDocument();
    expect(use).toHaveAttribute('href', '#icon-home');
    expect(use).toHaveAttribute('fill', 'currentColor');
  });
});
