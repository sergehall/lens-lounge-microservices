import React, { useState } from 'react';

import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/reduxHooks';

import { HeaderContainer, HeaderLink, Logo, LogoContainer, Title } from './header.styles';
import Authorization from './authorization/Authorization';

const Header: React.FC = () => {
  const { title, logoUrl, homeUrl } = useAppSelector((state: RootState) => state.layoutHeader);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLink href={homeUrl} aria-label="Home">
        <LogoContainer>
          <Logo src={logoUrl} alt="Site logo" />
        </LogoContainer>
        <Title>{title}</Title>
      </HeaderLink>
      <Authorization
        isDropdownVisible={isDropdownVisible}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    </HeaderContainer>
  );
};

export default Header;
