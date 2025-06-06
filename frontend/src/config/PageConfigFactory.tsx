import React from 'react';

import BannerImage from '../features/banner-image/bannerImage';
import PageContentSummarize from '../features/page-insight/PageInsight';

import { PageConfig } from './types/pageConfig.types';

const DEFAULT_BANNER_IMAGE_URL = '/images/defaultImageBanner.png';

type CreatePageConfigOptions = Omit<Partial<PageConfig>, 'bannerImage'> & {
  component: PageConfig['component'];
  bannerImageUrl?: string;
};

export function createPageConfig({
  component,
  isProtected = false,
  layoutType = 'default',
  bannerImageUrl = DEFAULT_BANNER_IMAGE_URL,
  pageContentSummarize = PageContentSummarize,
  unauthLandingProps,
}: CreatePageConfigOptions): PageConfig {
  return {
    component,
    isProtected,
    layoutType,
    pageContentSummarize,
    unauthLandingProps,
    bannerImage: () => <BannerImage imageUrl={bannerImageUrl} />,
  };
}
