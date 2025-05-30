// src/routes/AppRoutes.tsx

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import { pageConfig } from '../config/PageConfig';
import NotFoundPage from '../features/not-found/NotFoundPage';
import { generateRoutesFromPageConfig } from '../utils/generateRoutesFromPageConfig';
import * as S from '../styles/app.styles';

const AppRoutes: React.FC = () => {
  return (
    <>
      <S.AppContainer>
        <S.AppHeader data-testid="app-header">
          <Header />
        </S.AppHeader>

        <S.AppSidebar data-testid="app-sidebar">
          <Sidebar />
        </S.AppSidebar>

        <S.AppContent data-testid="app-content">
          <Suspense fallback={<Loader />}>
            <Routes>
              {generateRoutesFromPageConfig(pageConfig)}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </S.AppContent>
      </S.AppContainer>
    </>
  );
};

export default AppRoutes;

// If You Want to Strip data-testid in Production
// You can do something like this in a custom Babel plugin or build tool step:
// if (process.env.NODE_ENV === 'production') {
//   // Remove all data-testid attributes during build
// }
// Or, use something like:
// babel-plugin-react-remove-properties
// With config:
// ["react-remove-properties", { "properties": ["data-testid"] }]
