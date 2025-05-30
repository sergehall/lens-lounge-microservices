// src/features/showcase/user-blogs/selectors.ts

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

import { UserBlogsState } from './userBlogsSlice';

const selectUserBlogsState = (state: RootState): UserBlogsState => state.showcasePage.userBlogs;

export const makeSelectUserBlogsForCategory = (categoryName: string, username: string) =>
  createSelector(
    [(state: RootState) => selectUserBlogsState(state).blogsByCategory[categoryName] || []],
    (blogs) => blogs.filter((blog) => blog.author.toLowerCase() === username.toLowerCase())
  );
