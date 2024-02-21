import { render, screen } from '@testing-library/react';
import IconsNavBar, { IconsNavBarLinkType } from './IconsNavBar';

const mockLinks: IconsNavBarLinkType[] = [
  { text: 'Home', href: '#', icon: 'home' },
  { text: 'Woop', href: '/woop', icon: 'megaphone' }
];

jest.mock('wouter', () => ({
  Link: jest.fn(({ children }) => <>{children}</>)
}));

describe('@components/IconsNavBar.tsx', () => {
  it('should render the component with the expected number of items', () => {
    render(<IconsNavBar links={mockLinks} />);

    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(mockLinks.length);
  });

  it('should throw an error when links has no items', () => {
    jest.spyOn(global.console, 'error').mockImplementation();

    expect(() => render(<IconsNavBar links={[]} />)).toThrow(
      'IconsNavBar: links need to have at least one item'
    );
  });
});
