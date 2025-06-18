import React, { useState } from 'react';

import * as S from './authorization.styles';

import { RegisterPanel } from '@/components/auth/RegisterPanel';
import SignInPanel from '@/components/auth/SignInPanel';
import { isProfileValid } from '@/utils/guards/isProfileValid';
import { useAuthFlow } from '@/features/api/hooks/useAuthFlow';

export interface AuthorizationProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authorization: React.FC<AuthorizationProps> = ({
  isDropdownVisible,
  setIsDropdownVisible,
}) => {
  const { signOut, signInState, user } = useAuthFlow();
  const [authMode, setAuthMode] = useState<'none' | 'sign-in' | 'sign-up'>('none');

  return (
    <S.Wrapper
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      {/* Authorization Button */}
      <S.AuthButton $isActive={isDropdownVisible}>
        <>
          <span>Sign In</span>
          <S.Separator>/</S.Separator>
          <span>Register</span>
        </>
      </S.AuthButton>

      {/* Dropdown Content */}
      {isDropdownVisible && (
        <S.DropdownContainer>
          {isProfileValid(user) ? (
            <>
              <S.DropdownButton onClick={signOut}>SIGN OUT</S.DropdownButton>
              {signInState.error && (
                <S.ErrorMessage>
                  {'status' in signInState.error
                    ? ((signInState.error.data as { error: string })?.error ?? 'Sign-in failed')
                    : signInState.error.message}
                </S.ErrorMessage>
              )}
            </>
          ) : (
            <>
              {authMode === 'none' ? (
                <>
                  <S.DropdownTitle>
                    SIGN IN
                    <S.WhiteDivider>or</S.WhiteDivider>
                    CREATE ACCOUNT
                  </S.DropdownTitle>
                  <S.DropdownButton onClick={() => setAuthMode('sign-in')}>
                    SIGN IN
                  </S.DropdownButton>
                  <S.DropdownButton onClick={() => setAuthMode('sign-up')}>
                    CREATE ACCOUNT
                  </S.DropdownButton>
                </>
              ) : authMode === 'sign-in' ? (
                <SignInPanel />
              ) : (
                <RegisterPanel />
              )}
            </>
          )}
        </S.DropdownContainer>
      )}
    </S.Wrapper>
  );
};

export default Authorization;
