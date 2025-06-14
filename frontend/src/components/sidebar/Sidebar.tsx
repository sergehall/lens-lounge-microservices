import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './sidebar.styles';

import { useAppSelector } from '@/hooks/reduxHooks';

const Sidebar: React.FC = () => {
  const links = useAppSelector((state) => state.layoutSidebar.navigationLinks);

  return (
    <S.SidebarContainer role="navigation" aria-label="Sidebar Navigation">
      <S.SidebarList>
        {links.map((link) => (
          <S.SidebarItem key={link.url}>
            <NavLink to={link.url} style={{ textDecoration: 'none' }}>
              {({ isActive }) => <S.SidebarLink $isActive={isActive}>{link.name}</S.SidebarLink>}
            </NavLink>
          </S.SidebarItem>
        ))}
      </S.SidebarList>
    </S.SidebarContainer>
  );
};

export default Sidebar;
