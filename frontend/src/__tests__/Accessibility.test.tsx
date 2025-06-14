import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import App from '../App';

import { renderWithProviders } from '@/utils/test-utils/renderWithProviders';

describe('Accessibility landmarks', () => {
  test('has role="main"', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
