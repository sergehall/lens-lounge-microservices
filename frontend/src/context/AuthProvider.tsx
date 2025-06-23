// frontend/src/context/AuthProvider.tsx
import React, { useEffect, useState } from 'react';

import { AuthContext, AuthMode } from './AuthContext';

import { useAuthFlow } from '@/api/hooks/useAuthFlow';
import AuthModal from '@/components/auth/AuthModal';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authMode, setAuthMode] = useState<AuthMode>(null);

  const {
    user,
    isAuthenticated,
    signIn,
    signOut,
    signUp,
    signInState,
    isRegistering,
    registerError,
  } = useAuthFlow();

  const showAuthModal = (mode: AuthMode) => setAuthMode(mode);
  const hideAuthModal = () => setAuthMode(null);

  // Close the modal when the user is logged in
  useEffect(() => {
    if (user && authMode !== null) {
      hideAuthModal();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        signUp,
        showAuthModal,
        hideAuthModal,
        authMode,
        signInState,
        isRegistering,
        registerError,
      }}
    >
      {children}
      <AuthModal isVisible={!!authMode} mode={authMode || 'sign-in'} onClose={hideAuthModal} />
    </AuthContext.Provider>
  );
};
