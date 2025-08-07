// frontend/src/context/AuthProvider.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AuthContext, AuthMode } from './AuthContext';

import { useAuthFlow } from '@/api/hooks/useAuthFlow';
import AuthModal from '@/components/auth/AuthModal';
import { setCurrentUser, clearCurrentUser } from '@/features/users/userSlice';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

const LOCAL_STORAGE_KEY = 'auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
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

  // Load user from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ProfileType;
        dispatch(setCurrentUser(parsed));
      } catch {
        console.warn('Failed to parse saved user from localStorage');
      }
    }
  }, [dispatch]);

  // Update Redux store when user changes
  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    } else {
      dispatch(clearCurrentUser());
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [user, dispatch]);

  // Close modal when logged in
  useEffect(() => {
    if (user && authMode !== null) {
      setAuthMode(null);
    }
  }, [user, authMode]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        signUp,
        showAuthModal: (mode) => setAuthMode(mode),
        hideAuthModal: () => setAuthMode(null),
        authMode,
        signInState,
        isRegistering,
        registerError,
      }}
    >
      {children}
      <AuthModal
        isVisible={!!authMode}
        mode={authMode || 'sign-in'}
        onClose={() => setAuthMode(null)}
      />
    </AuthContext.Provider>
  );
};
