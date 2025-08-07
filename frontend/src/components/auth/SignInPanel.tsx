// src/components/auth/SignInPanel.tsx

import React from 'react';

import { SignInForm } from './SignInForm';
import * as S from './authorization.styles';

import { useAuthFlow } from '@/api/hooks/useAuthFlow';

const SignInPanel: React.FC = () => {
  const { signIn, signInState, user } = useAuthFlow();

  if (user) {
    return (
      <S.SignedInMessage>
        You are signed in as <strong>{user.login}</strong>
      </S.SignedInMessage>
    );
  }

  return (
    <>
      <S.SignInWithUsernameContainer>
        <S.SignInInstruction>USE YOUR EMAIL OR USERNAME</S.SignInInstruction>
        <SignInForm onSubmit={signIn} isLoading={signInState.isLoading} />
        <S.ForgotPasswordLink href="#">FORGOT PASSWORD?</S.ForgotPasswordLink>

        {signInState.error && (
          <S.ErrorMessage>
            {'status' in signInState.error
              ? ((signInState.error.data as { error?: string })?.error ?? 'Sign-in failed')
              : (signInState.error as Error).message}
          </S.ErrorMessage>
        )}
      </S.SignInWithUsernameContainer>
    </>
  );
};

export default SignInPanel;
