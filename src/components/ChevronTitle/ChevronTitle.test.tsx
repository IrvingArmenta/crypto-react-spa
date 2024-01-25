import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ChevronTitle, { type ChevronTitlePropsType } from './ChevronTitle';

const mockChevronTitleProps: ChevronTitlePropsType = {
  text: 'Some Cool Text'
};

jest.mock('@/components', () => ({
  SvgIcon: jest.fn(() => <></>)
}));

describe('@components/IconsNavBar.tsx', () => {
  it('should render the component with the expected props', () => {
    const { container } = render(<ChevronTitle {...mockChevronTitleProps} />);

    expect(container).toBeInTheDocument();
  });
});
