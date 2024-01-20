import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Route } from 'wouter';
import { ReactNode } from 'react';

test('demo', () => {
  expect(true).toBe(true);
});

it('Renders the main page', () => {
  render(<App />);

  expect(screen.getByText('application')).toBeInTheDocument();
});
