// frontend/src/components/auth/SignInPanel.tsx

import React from 'react';

import { SignInForm } from './SignInForm';
import * as S from './authorization.styles';

import { useAuthFlow } from '@/hooks/auth/useAuthFlow';

export const SignInPanel: React.FC = () => {
  const { signIn, signInState } = useAuthFlow();

  return (
    <>
      <S.SignInWithUsernameContainer>
        <S.SignInInstruction>
          USE YOUR <br /> EMAIL OR USERNAME
        </S.SignInInstruction>
        <SignInForm onSubmit={signIn} isLoading={signInState.isLoading} />
        <S.ForgotPasswordLink href="#">FORGOT PASSWORD?</S.ForgotPasswordLink>
      </S.SignInWithUsernameContainer>

      <S.WhiteDivider>or</S.WhiteDivider>

      <S.SignInWithSocialContainer>
        <S.SignInWithGoogleButton>Sign in with Google</S.SignInWithGoogleButton>
        <S.SignInWithAppleButton>Continue with Apple</S.SignInWithAppleButton>
        <S.ContinueWithFacebookButton>Continue with Facebook</S.ContinueWithFacebookButton>
      </S.SignInWithSocialContainer>
    </>
  );
};

export default SignInPanel;
