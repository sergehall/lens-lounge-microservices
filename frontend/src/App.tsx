// frontend/src/App.tsx
import React, { FC } from 'react';

import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
};

export default App;
