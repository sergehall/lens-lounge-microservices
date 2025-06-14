import React from 'react';

import BannerImage from '../features/banner-image/bannerImage';
import PageInsight from '../features/page-insight/PageInsight';

import { PageConfig } from './types/pageConfig.types';

import DEFAULT_BANNER_IMAGE_URL from '@/assets/images/defaultImageBanner.png';

type CreatePageConfigOptions = Omit<Partial<PageConfig>, 'bannerImage' | 'pageContentSummarize'> & {
  component: PageConfig['component'];
  bannerImageUrl?: string;
};

export function createPageConfig({
  component,
  isProtected = false,
  layoutType = 'default',
  unauthLandingProps,
  bannerImageUrl = DEFAULT_BANNER_IMAGE_URL,
}: CreatePageConfigOptions): PageConfig {
  return {
    component,
    isProtected,
    layoutType,
    unauthLandingProps,
    bannerImage: <BannerImage imageUrl={bannerImageUrl} />,
    pageContentSummarize: <PageInsight />,
  };
}
