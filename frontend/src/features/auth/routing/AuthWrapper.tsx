// src/components/routing/AuthWrapper.tsx
import React from 'react';

import UnauthenticatedLanding from '../../../components/unauthenticated-landing/UnauthenticatedLanding';
import { selectIsAuthenticated } from '../authSlice';

import { unauthContent } from '@/config/unauthContent';
import { useAppSelector } from '@/hooks/reduxHooks';

interface AuthWrapperProps {
  children: React.ReactNode;
  unauthLandingProps?: {
    title: string;
    description: string;
    warning: string;
  };
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, unauthLandingProps }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return (
      <UnauthenticatedLanding
        title={unauthLandingProps?.title || unauthContent.default.title}
        description={unauthLandingProps?.description || unauthContent.default.description}
        warning={unauthLandingProps?.warning || unauthContent.default.warning}
        onSignIn={() => console.log('Sign in clicked')}
        onCreateAccount={() => console.log('Create account clicked')}
      />
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
