import { BlogPreview } from '../types/blogs.types';
import { allBlogsByCategoryMocks } from '../../../category-blogs-page/mocks/allBlogsByCategoryMocks';

export const fetchUserBlogsAPI = async (
  username: string
): Promise<Record<string, BlogPreview[]>> => {
  if (!username.trim()) return {};

  const userBlogsByCategory: Record<string, BlogPreview[]> = {};

  Object.entries(allBlogsByCategoryMocks).forEach(([category, blogs]) => {
    const filtered = blogs.filter((blog) => blog.author.toLowerCase() === username.toLowerCase());
    if (filtered.length > 0) {
      userBlogsByCategory[category] = filtered;
    }
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(userBlogsByCategory), 100); // simulate network delay
  });
};
