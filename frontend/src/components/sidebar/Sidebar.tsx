// frontend/src/components/sidebar/Sidebar.tsx

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import * as S from './sidebar.styles';

import { isActiveSidebarLink } from '@/utils/navigation/isActiveSidebarLink';
import { useAppSelector } from '@/hooks/reduxHooks';

const Sidebar: React.FC = () => {
  const links = useAppSelector((state) => state.layoutSidebar.navigationLinks);
  const location = useLocation();

  return (
    <S.SidebarContainer role="navigation" aria-label="Sidebar Navigation">
      <S.SidebarList>
        {links.map((link) => (
          <S.SidebarItem key={link.url}>
            <NavLink to={link.url} style={{ textDecoration: 'none' }}>
              <S.SidebarLink $isActive={isActiveSidebarLink(link.url, location)}>
                {link.name}
              </S.SidebarLink>
            </NavLink>
          </S.SidebarItem>
        ))}
      </S.SidebarList>
    </S.SidebarContainer>
  );
};

export default Sidebar;
