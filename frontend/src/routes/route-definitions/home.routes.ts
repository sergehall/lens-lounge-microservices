// src/routes/route-definitions/home.routes.ts

import { CATEGORY_SLUGS, CategoryName } from '../../config/categorySlugs';
import { buildRoute } from '../utils/buildRoute';

// Step 1: Base static routes
const HOME_ROUTES_BASE = {
  root: '/',
  categoriesRoot: '/categories',
  categoryBySlug: '/categories/:name',
} as const;

export const HOME_ROUTES = {
  ...HOME_ROUTES_BASE,

  build: {
    categoryBySlug: (slug: string): `${typeof HOME_ROUTES_BASE.categoriesRoot}/${string}` =>
      buildRoute(HOME_ROUTES_BASE.categoryBySlug, {
        name: slug,
      }) as `${typeof HOME_ROUTES_BASE.categoriesRoot}/${string}`,

    categoryByName: (name: CategoryName): `${typeof HOME_ROUTES_BASE.categoriesRoot}/${string}` =>
      buildRoute(HOME_ROUTES_BASE.categoryBySlug, {
        name: CATEGORY_SLUGS[name],
      }) as `${typeof HOME_ROUTES_BASE.categoriesRoot}/${string}`,
  },
} as const;
