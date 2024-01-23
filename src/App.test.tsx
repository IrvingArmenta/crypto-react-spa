import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Tests', () => {
  it('Renders the main page', async () => {
    render(<App />);

    await waitFor(() => screen);

    expect(screen).toBeTruthy();
  });
});
