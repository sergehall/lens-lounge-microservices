import { allBlogsByCategoryMocks } from '../mocks/allBlogsByCategoryMocks';
import { BlogPreview } from '../types/blogs.types';

export const fetchCategoryBlogsAPI = async (categoryName: string): Promise<BlogPreview[]> => {
  const key = categoryName.toLowerCase();

  const blogs = allBlogsByCategoryMocks[key];

  if (blogs) {
    return blogs;
  }

  throw new Error(`Category "${categoryName}" not found`);
};
