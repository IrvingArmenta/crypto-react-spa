import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Route } from 'wouter';
import { ReactNode } from 'react';

jest.mock('wouter', () => ({
  ...jest.requireActual('wouter'),
  Link: jest.fn(({ children }) => <>{children}</>),
  Route: jest.fn(() => <></>)
}));

jest.mock('./components', () => ({
  TopNavBar: jest.fn(() => <></>)
}));

jest.mock('react', () => {
  const React = jest.requireActual('react');
  React.Suspense = ({ children }: { children: ReactNode }) => children;
  return React;
});

describe('App.tsx', () => {
  it('Renders the main page with the main layout wrapper', async () => {
    render(<App />);

    await waitFor(() => screen);

    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
  });

  it('should render both available routes', async () => {
    render(<App />);

    await waitFor(() => screen);

    expect(Route).toHaveBeenCalledTimes(2);
  });
});
