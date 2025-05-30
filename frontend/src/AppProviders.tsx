// src/AppProviders.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store';
import AuthProvider from './features/auth/AuthProvider';
import theme from './themes/theme';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </Provider>
);

export default AppProviders;
