// src/routes/route-definitions/about.routes.ts

import { buildRoute } from '../utils/buildRoute';

// Base (static) routes
const ABOUT_ROUTES_BASE = {
  root: '/about',
  name: '/about/:name',
} as const;

export const ABOUT_ROUTES = {
  ...ABOUT_ROUTES_BASE,

  build: {
    name: (slug: string): `${typeof ABOUT_ROUTES_BASE.root}/${string}` =>
      buildRoute(ABOUT_ROUTES_BASE.name, {
        name: slug,
      }) as `${typeof ABOUT_ROUTES_BASE.root}/${string}`,
  },
} as const;
