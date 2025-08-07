// src/routes/route-definitions/showcase.routes.ts

import { buildRoute } from '../utils/buildRoute';

import { CATEGORY_SLUGS, CategoryName } from '@/config/categorySlugs';

// Static base + dynamic builders with strong types
const SHOWCASE_ROUTES_BASE = {
  root: '/showcase',
  category: '/showcase/category',
  categoryBySlug: '/showcase/category/:name',
} as const;

export const SHOWCASE_ROUTES = {
  ...SHOWCASE_ROUTES_BASE,

  build: {
    categoryBySlug: (slug: string): `${typeof SHOWCASE_ROUTES_BASE.category}/${string}` =>
      buildRoute(SHOWCASE_ROUTES_BASE.categoryBySlug, {
        name: slug,
      }) as `${typeof SHOWCASE_ROUTES_BASE.category}/${string}`,

    categoryByName: (name: CategoryName): `${typeof SHOWCASE_ROUTES_BASE.category}/${string}` =>
      buildRoute(SHOWCASE_ROUTES_BASE.categoryBySlug, {
        name: CATEGORY_SLUGS[name],
      }) as `${typeof SHOWCASE_ROUTES_BASE.category}/${string}`,
  },
} as const;
