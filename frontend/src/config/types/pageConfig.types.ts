// src/config/types/pageConfig.types.ts
import React from 'react';

import { UnauthLandingProps } from '../unauthContent';

export interface PageConfig {
  path?: string;
  bannerImage: React.FC;
  pageContentSummarize: React.FC;
  component: React.FC;
  isProtected: boolean;
  layoutType: 'default' | 'fullWidth' | 'none';
  unauthLandingProps?: UnauthLandingProps;
}
