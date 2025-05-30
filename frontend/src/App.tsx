// src/App.tsx
import React from 'react';

import StatusBanner from './components/status-banner/StatusBanner';
import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <StatusBanner />
      <AppRoutes />
    </>
  );
};

export default App;
