// frontend/src/context/AuthContext.ts
import { createContext, useContext } from 'react';

import { SignInState } from '@/api/types/types';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

export type AuthMode = 'sign-in' | 'sign-up' | null;

export interface AuthContextType {
  user: ProfileType | undefined;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  showAuthModal: (mode: AuthMode) => void;
  hideAuthModal: () => void;
  authMode: AuthMode;
  signInState: SignInState;
  isRegistering: boolean;
  registerError: string | undefined;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
