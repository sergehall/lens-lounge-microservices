// src/routes/routes.ts

import { ABOUT_ROUTES } from './route-definitions/about.routes';
import { CONTACT_ROUTES } from './route-definitions/contact.routes';
import { HOME_ROUTES } from './route-definitions/home.routes';
import { NEWS_ROUTES } from './route-definitions/news.routes';
import { SHOWCASE_ROUTES } from './route-definitions/showcase.routes';
import { TECHNOLOGY_ROUTES } from './route-definitions/technologies.routes';
import { WHISPER_ROUTES } from './route-definitions/whisper.routes';

export const ROUTES = {
  home: HOME_ROUTES,
  showcase: SHOWCASE_ROUTES,
  whisper: WHISPER_ROUTES,
  technologies: TECHNOLOGY_ROUTES,
  news: NEWS_ROUTES,
  about: ABOUT_ROUTES,
  contact: CONTACT_ROUTES,
};
