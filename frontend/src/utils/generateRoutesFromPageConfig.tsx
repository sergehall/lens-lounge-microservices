import React from 'react';
import { Route } from 'react-router-dom';

import RequireAuth from '@/components/auth/RequireAuth';
import { PageConfig } from '@/config/types/pageConfig.types';

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
    // console.log('Generating route:', {
    //   path,
    //   component: config.component?.name,
    //   isProtected: config.isProtected,
    // });

    let content = <config.component />;

    if (config.layoutType !== 'none') {
      content = (
        <>
          {config.bannerImage}
          {config.pageContentSummarize}
          {content}
        </>
      );
    }

    if (config.isProtected) {
      content = <RequireAuth unauthLandingProps={config.unauthLandingProps}>{content}</RequireAuth>;
    }

    return <Route key={path} path={path} element={content} />;
  });
};
