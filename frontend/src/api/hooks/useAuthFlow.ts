import { useRegisterUserMutation } from '@/api/apiSlice';
import { useAuth } from '@/api/hooks/useAuth';
import { parseApiError } from '@/utils/parseApiError';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';
import { SignInState } from '@/api/types/types';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { clearCurrentUser } from '@/features/users/userSlice';

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
  const { user, signInState, handleSignIn, handleSignOut } = useAuth();

  const dispatch = useAppDispatch();

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
      await registerUser({ email, login: username, password }).unwrap();
      await handleSignIn(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    await handleSignOut();
    dispatch(clearCurrentUser());
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
