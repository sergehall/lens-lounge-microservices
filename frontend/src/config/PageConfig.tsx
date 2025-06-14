import { unauthContent } from './unauthContent';
import { createPageConfig } from './CreatePageConfig';

import { ROUTES } from '@/routes/routes';
import {
  HomePage,
  CategoryBlogsPage,
  ShowcasePage,
  UserBlogs,
  WhisperPage,
  ChatPanel,
  ContactsPanel,
  PortfolioIntro,
  ContactPage,
  TechnologiesPage,
  NewsPage,
} from '@/routes/lazy-pages';

export const pageConfig = {
  [ROUTES.home.root]: createPageConfig({ component: HomePage }),

  [ROUTES.home.categoriesRoot]: createPageConfig({ component: HomePage }),

  [ROUTES.home.categoryBySlug]: createPageConfig({
    component: CategoryBlogsPage,
  }),

  [ROUTES.showcase.root]: createPageConfig({
    component: ShowcasePage,
    isProtected: true,
    unauthLandingProps: unauthContent.showcase,
  }),

  [ROUTES.showcase.categoryBySlug]: createPageConfig({
    component: UserBlogs,
    isProtected: true,
    unauthLandingProps: unauthContent.showcase,
  }),

  [ROUTES.whisper.root]: createPageConfig({
    component: WhisperPage,
    isProtected: true,
    unauthLandingProps: unauthContent.whisper,
  }),

  [ROUTES.whisper.chatsRoot]: createPageConfig({
    component: ChatPanel,
    isProtected: true,
    unauthLandingProps: unauthContent.whisper,
  }),

  [ROUTES.whisper.chatId]: createPageConfig({
    component: ChatPanel,
    isProtected: true,
    unauthLandingProps: unauthContent.whisper,
  }),

  [ROUTES.whisper.contactsRoot]: createPageConfig({
    component: ContactsPanel,
    isProtected: true,
    unauthLandingProps: unauthContent.whisper,
  }),

  [ROUTES.whisper.contactId]: createPageConfig({
    component: ContactsPanel,
    isProtected: true,
    unauthLandingProps: unauthContent.whisper,
  }),

  [ROUTES.technologies.root]: createPageConfig({
    component: TechnologiesPage,
  }),

  [ROUTES.news.root]: createPageConfig({
    component: NewsPage,
  }),

  [ROUTES.about.root]: createPageConfig({
    component: PortfolioIntro,
  }),

  [ROUTES.contact.root]: createPageConfig({
    component: ContactPage,
  }),
};
