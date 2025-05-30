// src/api/services/useAuth.ts
import { useSignInMutation, useSignOutMutation, useGetUserQuery } from '../apiSlice';

export const useAuth = () => {
  // RTK Query hooks
  const [signIn, signInState] = useSignInMutation();
  const [signOut] = useSignOutMutation();
  const {
    data: user,
    isLoading: userLoading,
    refetch: refetchUser,
    error: userError,
  } = useGetUserQuery();

  // Handle sign-in with email and password
  const handleSignIn = async (email: string, password: string) => {
    try {
      await signIn({ email, password }).unwrap();
      await refetchUser(); // Refetch profile after login to update state
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      await refetchUser(); // Clear profile from cache after signout
    } catch (err) {
      console.error('Sign-out error', err);
    }
  };

  return {
    user,
    userLoading,
    userError,
    handleSignIn,
    handleSignOut,
    signInState,
  };
};
