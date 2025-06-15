import React, { useState } from 'react';

import * as S from './header.styles';

import Authorization from '@/components/auth/Authorization';
import { RootState } from '@/app/store';
import { useAppSelector } from '@/hooks/reduxHooks';

const Header: React.FC = () => {
  const { title, logoUrl, homeUrl } = useAppSelector((state: RootState) => state.layoutHeader);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderLink href={homeUrl} aria-label="Home">
        <S.LogoContainer>
          <S.Logo src={logoUrl} alt="Site logo" />
        </S.LogoContainer>
        <S.Title>{title}</S.Title>
      </S.HeaderLink>
      <Authorization
        isDropdownVisible={isDropdownVisible}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    </S.HeaderContainer>
  );
};

export default Header;
