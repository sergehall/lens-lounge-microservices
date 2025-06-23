// frontend/src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppProviders from './AppProviders';
import './index.css';
import { getRootElement } from './utils/dom';

const container = getRootElement();
if (!container) throw new Error('Root element not found');

createRoot(container).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
