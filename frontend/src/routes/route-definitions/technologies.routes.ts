// src/routes/route-definitions/technologies.routes.ts

import { buildRoute } from '../utils/buildRoute';

// Static base + dynamic builders with strong types
const TECHNOLOGY_ROUTES_BASE = {
  root: '/technologies',
  name: '/technologies/:name',
} as const;

export const TECHNOLOGY_ROUTES = {
  ...TECHNOLOGY_ROUTES_BASE,

  build: {
    name: (techName: string): `${typeof TECHNOLOGY_ROUTES_BASE.root}/${string}` =>
      buildRoute(TECHNOLOGY_ROUTES_BASE.name, {
        name: techName,
      }) as `${typeof TECHNOLOGY_ROUTES_BASE.root}/${string}`,
  },
} as const;
