import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { Category } from '../../categories/types/category.types';
import { categoriesMock } from '../../categories/mock/categoriesMock';
import placeholderImageDefault from '../../../assets/images/placeholderImageDefault.png';
import { UserBlogsState } from '../user-blogs/userBlogsSlice';
import { isCategoryName } from '../../../utils/guards/isCategoryName';

const selectUserBlogsState = (state: RootState): UserBlogsState => state.showcasePage.userBlogs;

export const selectUserBlogsByCategory = createSelector(
  [selectUserBlogsState],
  (userBlogsState) => userBlogsState.blogsByCategory
);

export const makeSelectUserCategoriesFromBlogs = (username: string) =>
  createSelector([selectUserBlogsByCategory], (blogsByCategory): Category[] => {
    const categories: Category[] = [];

    Object.entries(blogsByCategory).forEach(([categoryName, blogs]) => {
      const hasUserBlogs = blogs.some(
        (blog) => blog.author.toLowerCase() === username.toLowerCase()
      );

      if (hasUserBlogs) {
        const matchedCategory = categoriesMock.find(
          (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        );

        const candidateName = matchedCategory?.name || categoryName;

        if (isCategoryName(candidateName)) {
          categories.push({
            name: candidateName,
            imageUrl: matchedCategory?.imageUrl || placeholderImageDefault,
            featured: false,
          });
        } else {
          console.warn(`⚠️ Unrecognized category: "${categoryName}" — skipped`);
        }
      }
    });

    return categories;
  });
