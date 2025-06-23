// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';

// RTK Query API

import headerReducer from '../components/header/headerSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import pageInsightReducer from '../features/page-insight/pageInsightSlice';
import postsReducer from '../features/posts/postsSlice';
import homePageReducer from '../features/posts/posts-slider/postsSliderSlice';
import postInteractionsReducer from '../features/posts/interactions/postInteractionsSlice';
import categoriesReducer from '../features/categories/categorySlice';
import categoryBlogsReducer from '../features/category-blogs-page/categoryBlogsPageSlice';
import showcasePageReducer from '../features/showcase/showcasePageReducer';
import myCategoriesReducer from '../features/showcase/user-categories/UserCategoriesSlice';
import whisperPageReducer from '../features/whisper/whisperPageReducer';
import technologiesReducer from '../features/technologies/technologiesSlice';
import newsPageReducer from '../features/news/newsPageSlice';
import userReducer from '../features/users/userSlice';

import { apiSlice } from '@/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    // Layout
    layoutHeader: headerReducer,
    layoutSidebar: sidebarReducer,

    // AI Features
    pageInsight: pageInsightReducer,

    // Home
    homePage: homePageReducer,
    categories: categoriesReducer,
    myCategories: myCategoriesReducer,
    categoryBlogs: categoryBlogsReducer,

    // Showcase
    showcasePage: showcasePageReducer,

    // Whisper
    whisperPage: whisperPageReducer,

    // Technologies
    technologiesPage: technologiesReducer,

    // News
    newsPage: newsPageReducer,

    // Posts
    posts: postsReducer,
    postInteractions: postInteractionsReducer,

    // users
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
