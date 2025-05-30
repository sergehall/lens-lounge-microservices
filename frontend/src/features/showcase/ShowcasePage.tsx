// src/features/showcase/ShowcasePage.tsx

import React from 'react';

import Profile from './profile/Profile';
import UserCategories from './user-categories/UserCategories';
import * as S from './showcasePage.styles';

const ShowcasePage: React.FC = () => {
  return (
    <S.ShowcaseContainer>
      <S.ProfileSection>
        <Profile />
      </S.ProfileSection>
      <S.BlogsSection>
        <UserCategories />
      </S.BlogsSection>
    </S.ShowcaseContainer>
  );
};

export default ShowcasePage;
