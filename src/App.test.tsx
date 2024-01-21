import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Route } from 'wouter';
import { ReactNode } from 'react';

describe('App Tests', () => {
  it('Renders the main page', () => {
    render(<App />);

    expect(screen).toBeTruthy();
  });
});
