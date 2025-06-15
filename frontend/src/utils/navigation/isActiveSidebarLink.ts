// frontend/src/components/sidebar/navigation/isActiveSidebarLink.ts

import { Location } from 'react-router-dom';

export function isActiveSidebarLink(linkUrl: string, location: Location): boolean {
  const pathname = location.pathname;

  if (linkUrl === '/' && (pathname === '/' || pathname.startsWith('/categories'))) {
    return true;
  }

  return pathname === linkUrl;
}
