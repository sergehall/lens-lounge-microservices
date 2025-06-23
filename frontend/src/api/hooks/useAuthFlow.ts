// frontend/src/api/hooks/useAuthFlow.ts
import { useRegisterUserMutation } from '@/api/apiSlice';
import { useAuth } from '@/api/hooks/useAuth';
import { parseApiError } from '@/utils/parseApiError';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';
import { SignInState } from '@/api/types/types';

interface UseAuthFlowResult {
  user: ProfileType | undefined;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInState: SignInState;
  isRegistering: boolean;
  registerError: string | undefined;
}

export const useAuthFlow = (): UseAuthFlowResult => {
  const { handleSignIn, handleSignOut, signInState, user } = useAuth();
  const [registerUser, registerState] = useRegisterUserMutation();

  const signIn = async (email: string, password: string) => {
    try {
      await handleSignIn(email, password);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, username: string, password: string) => {
    try {
      const login = username;
      await registerUser({ email, login, password }).unwrap();
      await handleSignIn(email, password); // auto login
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    await handleSignOut();
  };

  return {
    user,
    isAuthenticated: Boolean(user?.userId),
    signIn,
    signOut,
    signUp,
    signInState,
    isRegistering: registerState.isLoading,
    registerError: parseApiError(registerState.error),
  };
};
