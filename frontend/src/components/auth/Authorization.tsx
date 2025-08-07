import React, { useState } from 'react';

import * as S from './authorization.styles';

import { RegisterPanel } from '@/components/auth/RegisterPanel';
import SignInPanel from '@/components/auth/SignInPanel';
import { isProfileValid } from '@/utils/guards/isProfileValid';
import { useAuthFlow } from '@/api/hooks/useAuthFlow';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { clearCurrentUser } from '@/features/users/userSlice';

export interface AuthorizationProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authorization: React.FC<AuthorizationProps> = ({
  isDropdownVisible,
  setIsDropdownVisible,
}) => {
  const dispatch = useAppDispatch();
  const { signOut, signInState, user } = useAuthFlow();
  const [authMode, setAuthMode] = useState<'none' | 'sign-in' | 'sign-up'>('none');

  const isLoggedIn = isProfileValid(user);

  const handleLogout = async () => {
    await signOut();
    dispatch(clearCurrentUser());
  };

  return (
    <S.Wrapper
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      {/* TOP BUTTON ONLY */}
      <S.AuthButton $isActive={isDropdownVisible} onClick={isLoggedIn ? handleLogout : undefined}>
        {isLoggedIn ? (
          <span>LOG OUT</span>
        ) : (
          <>
            <span>Sign In</span>
            <S.Separator>/</S.Separator>
            <span>Register</span>
          </>
        )}
      </S.AuthButton>

      {/* DROPDOWN ONLY IF NOT LOGGED IN */}
      {!isLoggedIn && isDropdownVisible && (
        <S.DropdownContainer>
          {authMode === 'none' ? (
            <>
              <S.DropdownTitle>
                SIGN IN
                <S.WhiteDivider>or</S.WhiteDivider>
                CREATE ACCOUNT
              </S.DropdownTitle>
              <S.DropdownButton onClick={() => setAuthMode('sign-in')}>SIGN IN</S.DropdownButton>
              <S.DropdownButton onClick={() => setAuthMode('sign-up')}>
                CREATE ACCOUNT
              </S.DropdownButton>
            </>
          ) : authMode === 'sign-in' ? (
            <SignInPanel />
          ) : (
            <RegisterPanel />
          )}

          {signInState.error && (
            <S.ErrorMessage>
              {'status' in signInState.error
                ? ((signInState.error.data as { error: string })?.error ?? 'Sign-in failed')
                : signInState.error.message}
            </S.ErrorMessage>
          )}
        </S.DropdownContainer>
      )}
    </S.Wrapper>
  );
};

export default Authorization;
