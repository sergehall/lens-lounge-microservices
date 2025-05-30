// src/routes/route-definitions/news.routes.ts

import { buildRoute } from '../utils/buildRoute';

// Step 1–2: Static base + dynamic builders with strong types
const NEWS_ROUTES_BASE = {
  root: '/news',
  name: '/news/:name',
} as const;

export const NEWS_ROUTES = {
  ...NEWS_ROUTES_BASE,

  build: {
    name: (slug: string): `${typeof NEWS_ROUTES_BASE.root}/${string}` =>
      buildRoute(NEWS_ROUTES_BASE.name, {
        name: slug,
      }) as `${typeof NEWS_ROUTES_BASE.root}/${string}`,
  },
} as const;
