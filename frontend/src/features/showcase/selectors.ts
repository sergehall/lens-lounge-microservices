
import { getCategoryNameBySlug } from "@/utils/getCategoryNameBySlug";
import { createSelector } from '@reduxjs/toolkit';

import { categoriesMock } from '../categories/mock/categoriesMock';
import { Category } from '../categories/types/category.types';
import { UserBlogsState } from './user-blogs/userBlogsSlice';
import { RootState } from '@/app/store';
import PLACEHOLDER_IMAGE_DEFAULT from '@/assets/images/placeholderImageDefault.png';

const selectUserBlogsState = (state: RootState): UserBlogsState =>
  state.showcasePage.userBlogs;

export const makeSelectUserCategoriesFromBlogs = (username: string) =>
  createSelector([selectUserBlogsState], (userBlogsState) => {
    if (!userBlogsState || !userBlogsState.blogsByCategory) {
      return [];
    }

    const categories: Category[] = [];

    Object.entries(userBlogsState.blogsByCategory).forEach(([slug, blogs]) => {
      const hasUserBlogs = blogs.some(
        (blog) => blog.author.toLowerCase() === username.toLowerCase()
      );

      if (!hasUserBlogs) return;

      const categoryName = getCategoryNameBySlug(slug);

      if (!categoryName) {
        console.warn(`❗️Unknown category slug "${slug}" — skipping`);
        return;
      }

      const matchedCategory = categoriesMock.find((cat) => cat.name === categoryName);

      categories.push({
        name: categoryName,
        imageUrl: matchedCategory?.imageUrl || PLACEHOLDER_IMAGE_DEFAULT,
        featured: false,
      });
    });

    return categories;
  });