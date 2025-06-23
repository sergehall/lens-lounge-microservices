// src/AppProviders.tsx

import { AuthProvider } from "@/context/AuthProvider";
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store';
import theme from './themes/theme';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({children}) => {
  if (!React.isValidElement(children)) {
    console.error('AppProviders received invalid children:', children);
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            {children}
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
