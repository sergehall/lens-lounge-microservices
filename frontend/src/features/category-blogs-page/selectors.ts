// src/features/category-blogs-page/selectors.ts

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { CategoryBlogsState } from './categoryBlogsPageSlice';

const selectCategoryBlogsState = (state: RootState): CategoryBlogsState => state.categoryBlogs;

export const makeSelectBlogsForCategory = (categoryName: string) =>
  createSelector([selectCategoryBlogsState], (state) => state.blogsByCategory[categoryName] || []);

export const selectCategoryBlogsLoading = (category: string) =>
  createSelector([selectCategoryBlogsState], (state) => state.loading[category] || false);

export const selectIsCategoryLoaded = (categoryName: string) =>
  createSelector(
    [selectCategoryBlogsState],
    (state) =>
      Array.isArray(state.blogsByCategory[categoryName]) &&
      state.blogsByCategory[categoryName].length > 0
  );
