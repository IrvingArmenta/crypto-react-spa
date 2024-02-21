import { render } from '@testing-library/react';
import TopNavBar, { TopNavBarPropsType } from './TopNavBar';
import { Link } from 'wouter';

const mockTopNavBarLinks: TopNavBarPropsType['links'] = [
  { href: '#', text: 'link1' },
  { href: '#', text: 'link2' },
  { href: '/', text: 'link3' }
];

const mockLinkProps = [
  {
    'aria-current': undefined,
    href: '#',
    'aria-disabled': true,
    children: 'link1',
    className: expect.any(String),
    tabIndex: -1
  },
  {
    'aria-current': undefined,
    href: '#',
    'aria-disabled': true,
    children: 'link2',
    className: expect.any(String),
    tabIndex: -1
  },
  {
    'aria-current': 'page',
    href: '/',
    children: 'link3',
    className: expect.any(String),
    'aria-disabled': undefined,
    tabIndex: undefined
  }
];

jest.mock('wouter', () => ({
  ...jest.requireActual('jest'),
  Link: jest.fn(() => <></>),
  useLocation: jest.fn(() => ['/'])
}));

describe('@components/TopNavBar.tsx', () => {
  it('should only call Link 3 times with the expected props', () => {
    render(<TopNavBar links={mockTopNavBarLinks} />);

    expect(Link).toHaveBeenCalledTimes(3);
    expect(Link).toHaveBeenNthCalledWith(1, mockLinkProps[0], {});
    expect(Link).toHaveBeenNthCalledWith(2, mockLinkProps[1], {});
    expect(Link).toHaveBeenNthCalledWith(3, mockLinkProps[2], {});
  });
});
