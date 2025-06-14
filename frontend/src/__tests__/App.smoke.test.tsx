import { describe, test } from 'vitest';

import App from '../App';

import { renderWithProviders } from '@/utils/test-utils/renderWithProviders';

describe('App Smoke Test', () => {
  test('renders App without crashing', () => {
    renderWithProviders(<App />);
  });
});
