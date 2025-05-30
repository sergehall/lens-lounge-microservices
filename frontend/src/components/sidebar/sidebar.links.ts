// src/components/sidebar/sidebar.links.ts
import { ROUTES } from '../../routes/routes';

export const sidebarLinks = [
  { name: 'Home', url: ROUTES.home.root },
  { name: 'Showcase', url: ROUTES.showcase.root },
  { name: 'Whisper', url: ROUTES.whisper.root },
  { name: 'Technologies', url: ROUTES.technologies.root },
  { name: 'News', url: ROUTES.news.root },
  { name: 'About', url: ROUTES.about.root },
  { name: 'Contact', url: ROUTES.contact.root },
] as const;

export type NavLink = (typeof sidebarLinks)[number];
