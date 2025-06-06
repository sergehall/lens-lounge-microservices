import React from 'react';
import { act } from 'react-dom/test-utils';
import { screen, within } from '@testing-library/react';

import App from '../App';
import { sidebarLinks } from '@/components/sidebar/sidebar.links';
import { renderWithProviders } from '@/utils/test-utils/renderWithProviders';

describe('<App />', () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithProviders(<App />);
    });
  });

  test('renders layout sections', async () => {
    expect(await screen.findByTestId('app-header')).toBeInTheDocument();
    expect(await screen.findByTestId('app-sidebar')).toBeInTheDocument();
    expect(await screen.findByTestId('app-content')).toBeInTheDocument();
  });

  test('renders all sidebar links', async () => {
    const sidebar = await screen.findByTestId('app-sidebar');

    sidebarLinks.forEach((link) => {
      const element = within(sidebar).getByText(new RegExp(link.name, 'i'));
      expect(element.closest('a')).toHaveAttribute('href', link.url);
    });
  });
});
