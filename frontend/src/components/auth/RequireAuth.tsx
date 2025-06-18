// src/components/routing/RequireAuth.tsx
import React, { useState } from 'react';

import UnauthenticatedLanding from '../unauthenticated-landing/UnauthenticatedLanding';

import { useGetUserQuery } from '@/features/api/apiSlice';
import AuthModal from '@/components/auth/AuthModal';
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
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserQuery(undefined, {
    // Don't refetch if already cached
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div> Checking authentication...</div>;
  }

  if (!user || isError) {
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
