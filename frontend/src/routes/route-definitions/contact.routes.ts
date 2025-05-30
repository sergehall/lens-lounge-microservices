// src/routes/route-definitions/contact.routes.ts

import { buildRoute } from '../utils/buildRoute';

// Step 1–2: Static base + dynamic builders with strict types
const CONTACT_ROUTES_BASE = {
  root: '/contact',
  support: '/contact/support',
  sales: '/contact/sales',
  name: '/contact/:name',
} as const;

export const CONTACT_ROUTES = {
  ...CONTACT_ROUTES_BASE,

  build: {
    name: (slug: string): `${typeof CONTACT_ROUTES_BASE.root}/${string}` =>
      buildRoute(CONTACT_ROUTES_BASE.name, {
        name: slug,
      }) as `${typeof CONTACT_ROUTES_BASE.root}/${string}`,
  },
} as const;
