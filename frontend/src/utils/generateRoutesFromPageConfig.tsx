import React from 'react';
import { Route } from 'react-router-dom';

import AuthWrapper from '../features/auth/routing/AuthWrapper';
import { PageConfig } from '../config/types/pageConfig.types';

/**
 * Generates <Route> elements from a flat page configuration map.
 *
 * @param configMap - A map of route paths to their page configurations.
 * @returns An array of <Route> elements.
 */
export const generateRoutesFromPageConfig = (
  configMap: Record<string, PageConfig>
): React.ReactNode[] => {
  return Object.entries(configMap).map(([path, config]) => {
    // Logging route info for debugging purposes
    console.log('Generating route:', {
      path,
      component: config.component?.name,
      isProtected: config.isProtected,
    });

    let content = <config.component />;

    // Wrap with layout if layoutType is not 'none'
    if (config.layoutType !== 'none') {
      const Banner = config.bannerImage;
      const Summary = config.pageContentSummarize;
      content = (
        <>
          <Banner />
          <Summary />
          {content}
        </>
      );
    }

    // Wrap with AuthWrapper if route is protected
    if (config.isProtected) {
      content = <AuthWrapper unauthLandingProps={config.unauthLandingProps}>{content}</AuthWrapper>;
    }

    return <Route key={path} path={path} element={content} />;
  });
};
