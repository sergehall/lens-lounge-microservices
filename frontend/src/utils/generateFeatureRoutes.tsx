// src/utils/generateFeatureRoute.ts
import React from 'react';
import { Route } from 'react-router-dom';

import { PageConfig } from '../config/types/pageConfig.types';
import PageLayout from '../layouts/PageLayout';

/**
 * Generates a Route element with PageLayout for a given path and config.
 * Optionally adds nested routes if provided.
 */
export const generateFeatureRoute = (
  path: string,
  config: PageConfig,
  children?: React.ReactNode,
  key?: string
) => {
  return (
    <Route
      key={key || path}
      path={path}
      element={
        <PageLayout bannerImage={config.bannerImage} summarizeContent={config.pageContentSummarize}>
          <config.component />
        </PageLayout>
      }
    >
      {children}
    </Route>
  );
};
