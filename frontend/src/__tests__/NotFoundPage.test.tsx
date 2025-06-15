import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import App from '../App';

import { renderWithProviders } from '@/utils/test-utils/renderWithProviders';

describe('404 page', () => {
  test('shows Not Found for unknown routes', async () => {
    window.history.pushState({}, '', '/unknown-route');

    renderWithProviders(<App />);

    expect(await screen.findByText(/lounge lost/i)).toBeInTheDocument();
  });
});
