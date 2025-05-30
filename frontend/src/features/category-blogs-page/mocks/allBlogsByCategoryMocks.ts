// src/features/category-blogs-page/mocks/allBlogsByCategoryMocks.ts

import { blogsPhotographsMock } from './blogsPhotographsMock';
import { blogsProgrammingMock } from './blogsProgrammingMock';
import { blogsTechnologyMock } from './blogsTechnologyMock';

/**
 * Combines all blog mocks into a single object
 * Keys = category names (photography, programming, etc.)
 */
export const allBlogsByCategoryMocks = {
  ...blogsPhotographsMock,
  ...blogsProgrammingMock,
  ...blogsTechnologyMock,
};
