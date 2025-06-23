// src/components/routing/RequireAuth.tsx
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import UnauthenticatedLanding from '@/components/unauthenticated-landing/UnauthenticatedLanding';
import { unauthContent } from '@/config/unauthContent';

interface RequireAuthProps {
  children: React.ReactNode;
  unauthLandingProps?: {
    title: string;
    description: string;
    warning: string;
  };
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children, unauthLandingProps }) => {
  const { isAuthenticated, showAuthModal } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <UnauthenticatedLanding
        title={unauthLandingProps?.title || unauthContent.default.title}
        description={unauthLandingProps?.description || unauthContent.default.description}
        warning={unauthLandingProps?.warning || unauthContent.default.warning}
        onSignIn={() => showAuthModal('sign-in')}
        onCreateAccount={() => showAuthModal('sign-up')}
      />
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
