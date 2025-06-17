// src/config/types/pageConfig.types.ts
import React from 'react';

import { UnauthLandingProps } from '../unauthContent';

export interface PageConfig {
  path?: string;
  bannerImage?: React.ReactNode;
  pageContentSummarize: React.ReactNode;
  component: React.FC;
  isProtected: boolean;
  layoutType: 'default' | 'fullWidth' | 'none';
  unauthLandingProps?: UnauthLandingProps;
}
