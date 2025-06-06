// frontend/src/App.tsx
import React, { FC } from 'react';

import StatusBanner from './components/status-banner/StatusBanner';
import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <StatusBanner />
      <AppRoutes />
    </div>
  );
};

export default App;
