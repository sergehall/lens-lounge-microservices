import React from 'react';

export const HomePage = React.lazy(() => import('@/features/home-page/HomePage'));
export const CategoryBlogsPage = React.lazy(
  () => import('@/features/category-blogs-page/CategoryBlogsPage')
);
export const ShowcasePage = React.lazy(() => import('@/features/showcase/ShowcasePage'));
export const UserBlogs = React.lazy(() => import('@/features/showcase/user-blogs/UserBlogs'));
export const WhisperPage = React.lazy(() => import('@/features/whisper/WhisperPage'));
export const ChatPanel = React.lazy(() => import('@/features/whisper/chat/ChatPanel'));
export const ContactsPanel = React.lazy(() => import('@/features/whisper/contacts/Contacts'));
export const PortfolioIntro = React.lazy(() => import('@/features/about/About'));
export const ContactPage = React.lazy(() => import('@/features/contact/Contact'));
export const TechnologiesPage = React.lazy(
  () => import('@/features/technologies/TechnologiesPage')
);
export const NewsPage = React.lazy(() => import('@/features/news/NewsPage'));
