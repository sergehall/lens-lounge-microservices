// src/features/not-found/NotFoundPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './notFoundPage.styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Glow404>404</S.Glow404>
      <S.Tagline>Lounge Lost...</S.Tagline>
      <S.Description>
        You've reached a dark corner of the internet.
        <br />
        This page doesn't exist or has been moved.
      </S.Description>
      <S.Button onClick={() => navigate('/')}>Return to Base</S.Button>
    </S.Container>
  );
};

export default NotFoundPage;
