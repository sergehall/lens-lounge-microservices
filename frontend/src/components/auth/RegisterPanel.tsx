import React from 'react';

import * as S from './authorization.styles';
import { RegisterForm } from './RegisterForm';

import { useAuthFlow } from '@/api/hooks/useAuthFlow';

export const RegisterPanel: React.FC = () => {
  const { signUp, isRegistering } = useAuthFlow();

  return (
    <S.SignInWithUsernameContainer>
      <S.SignInInstruction>
        CREATE YOUR <br /> ACCOUNT
      </S.SignInInstruction>

      <RegisterForm onSubmit={signUp} isLoading={isRegistering} />
    </S.SignInWithUsernameContainer>
  );
};
