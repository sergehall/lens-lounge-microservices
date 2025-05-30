import React from 'react';

import defaultImageBanner from '../assets/images/defaultImageBanner.png';
import BannerImage from '../features/banner-image/bannerImage';
import PageContentSummarize from '../features/page-insight/PageInsight';

import { PageConfig } from './types/pageConfig.types';

type CreatePageConfigOptions = Omit<Partial<PageConfig>, 'bannerImage'> & {
  component: PageConfig['component'];
  bannerImageUrl?: string;
};

export function createPageConfig({
  component,
  isProtected = false,
  layoutType = 'default',
  bannerImageUrl = defaultImageBanner,
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
