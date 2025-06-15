// hooks/useAuthFlow.ts
import { useRegisterUserMutation } from '@/api/apiSlice';
import { useAuth } from '@/api/services/authService';

export const useAuthFlow = () => {
  const { handleSignIn, handleSignOut, signInState, user } = useAuth();
  const [registerUser, registerState] = useRegisterUserMutation();

  const signIn = async (email: string, password: string) => {
    await handleSignIn(email, password);
  };

  const signUp = async (email: string, username: string, password: string) => {
    try {
      await registerUser({ email, username, password }).unwrap();
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
