// src/index.tsx

import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import AppProviders from './AppProviders';
import './index.css';
import App from './App';
import { getRootElement } from './utils/dom';

const root: Root = ReactDOM.createRoot(getRootElement());

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
