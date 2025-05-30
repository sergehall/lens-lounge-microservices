import React, { useState } from 'react';

import { useAuth } from '../../../api/services/authService';
import { isProfileValid } from '../../../utils/guards/isProfileValid';

import {
  AuthButton,
  DropdownContainer,
  InputField,
  DropdownButton,
  ForgotPasswordLink,
  WhiteDivider,
  SignInWithUsernameContainer,
  SignInInstruction,
  SignInWithSocialContainer,
  SignInWithAppleButton,
  SignInWithGoogleButton,
  ContinueWithFacebookButton,
  DropdownTitle,
} from './authorization.styles';

export interface AuthorizationProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authorization: React.FC<AuthorizationProps> = ({
  isDropdownVisible,
  setIsDropdownVisible,
}) => {
  const { handleSignIn, signInState, user, handleSignOut } = useAuth();
  const [showSignInField, setShowSignInField] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => {
    setShowSignInField(true);
  };
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      {/* Authorization Button */}
      <AuthButton $isActive={isDropdownVisible}>
        {isProfileValid(user) ? `Welcome, ${user.firstName}` : 'Authorization'}
      </AuthButton>

      {/* Dropdown Content */}
      {isDropdownVisible && (
        <DropdownContainer>
          {/* If user is already signed in, show Sign Out */}
          {isProfileValid(user) ? (
            <>
              <DropdownButton onClick={handleSignOut}>SIGN OUT</DropdownButton>
              {signInState.error && (
                <p style={{ color: 'red', marginTop: '0.5rem' }}>
                  {'status' in signInState.error
                    ? ((signInState.error.data as { error: string })?.error ?? 'Sign-in failed')
                    : signInState.error.message}
                </p>
              )}
            </>
          ) : (
            <>
              {/* Conditional Rendering for Username Sign-In */}
              {!showSignInField ? (
                <>
                  <DropdownTitle>
                    SIGN IN
                    <WhiteDivider>or</WhiteDivider>
                    CREATE ACCOUNT
                  </DropdownTitle>
                  <DropdownButton onClick={handleSignInClick}>SIGN IN</DropdownButton>
                  <DropdownButton onClick={() => alert('Create Account')}>
                    CREATE ACCOUNT
                  </DropdownButton>
                </>
              ) : (
                <>
                  {/* Sign In via Email */}
                  <SignInWithUsernameContainer>
                    <DropdownTitle>SIGN IN</DropdownTitle>
                    <SignInInstruction>USE YOUR EMAIL ADDRESS OR PHONE NUMBER</SignInInstruction>
                    <InputField
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <DropdownButton
                      onClick={() => handleSignIn(email, password)}
                      disabled={signInState.isLoading}
                    >
                      {signInState.isLoading ? 'Signing in...' : 'NEXT STEP'}
                    </DropdownButton>
                    <ForgotPasswordLink href="#">FORGOT PASSWORD?</ForgotPasswordLink>
                  </SignInWithUsernameContainer>

                  {/* Divider */}
                  <WhiteDivider>or</WhiteDivider>

                  {/* Sign In via Social Media */}
                  <SignInWithSocialContainer>
                    <SignInWithAppleButton>Continue with Apple</SignInWithAppleButton>
                    <SignInWithGoogleButton>Sign in with Google</SignInWithGoogleButton>
                    <ContinueWithFacebookButton>Continue with Facebook</ContinueWithFacebookButton>
                  </SignInWithSocialContainer>
                </>
              )}
            </>
          )}
        </DropdownContainer>
      )}
    </div>
  );
};

export default Authorization;
