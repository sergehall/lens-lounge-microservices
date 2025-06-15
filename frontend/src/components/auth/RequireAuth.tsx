// src/components/routing/RequireAuth.tsx
import React, { useState } from 'react';

import UnauthenticatedLanding from '../unauthenticated-landing/UnauthenticatedLanding';

import { selectIsAuthenticated } from '@/features/auth/authSlice';
import { unauthContent } from '@/config/unauthContent';
import { useAppSelector } from '@/hooks/reduxHooks';
import AuthModal from '@/components/auth/AuthModal';

interface RequireAuthProps {
  children: React.ReactNode;
  unauthLandingProps?: {
    title: string;
    description: string;
    warning: string;
  };
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children, unauthLandingProps }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  if (!isAuthenticated) {
    return (
      <>
        <UnauthenticatedLanding
          title={unauthLandingProps?.title || unauthContent.default.title}
          description={unauthLandingProps?.description || unauthContent.default.description}
          warning={unauthLandingProps?.warning || unauthContent.default.warning}
          onSignIn={() => setShowLogin(true)}
          onCreateAccount={() => setShowCreate(true)}
        />
        <AuthModal isVisible={showLogin} mode="sign-in" onClose={() => setShowLogin(false)} />

        <AuthModal isVisible={showCreate} mode="sign-up" onClose={() => setShowCreate(false)} />
      </>
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
