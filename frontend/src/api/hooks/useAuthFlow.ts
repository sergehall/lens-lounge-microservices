// hooks/useAuthFlow.ts
import { useRegisterUserMutation } from '@/api/apiSlice';
import { useAuth } from '@/api/hooks/useAuth';

export const useAuthFlow = () => {
  const { handleSignIn, handleSignOut, signInState, user } = useAuth();
  const [registerUser, registerState] = useRegisterUserMutation();

  const signIn = async (email: string, password: string) => {
    await handleSignIn(email, password);
  };

  const signUp = async (email: string, username: string, password: string) => {
    try {
      const login = username;
      await registerUser({ email, login, password }).unwrap();
      // Можно: auto-login или уведомление
    } catch (error) {
      console.error('Registration error:', error);
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
    registerState,
    isRegistering: registerState.isLoading,
    registerError: registerState.error,
  };
};
