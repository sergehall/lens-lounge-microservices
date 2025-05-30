// src/features/showcase/user-blogs/mocks/getUserBlogsByCategory.ts

import { BlogPreview } from '../types/blogs.types';
import { allBlogsByCategoryMocks } from '../../../category-blogs-page/mocks/allBlogsByCategoryMocks';

export const getUserBlogsByCategory = (username: string): Record<string, BlogPreview[]> => {
  if (!username.trim()) return {};

  return Object.entries(allBlogsByCategoryMocks).reduce(
    (acc, [category, blogsInCategory]) => {
      const userBlogs = blogsInCategory.filter(
        (blog) => blog.author.toLowerCase() === username.toLowerCase()
      );
      if (userBlogs.length > 0) {
        acc[category] = userBlogs;
      }
      return acc;
    },
    {} as Record<string, BlogPreview[]>
  );
};
