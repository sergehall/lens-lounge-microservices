// frontend/src/api/services/useAuth.ts
import { useSignInMutation, useSignOutMutation, useGetUserQuery } from '../apiSlice';

export const useAuth = () => {
  // RTK Query hooks
  const [signInMutation, signInState] = useSignInMutation();
  const [signOutMutation] = useSignOutMutation();
  const {
    data: user,
    isLoading: userLoading,
    refetch: refetchUser,

    error: userError,
  } = useGetUserQuery(undefined, { skip: false });

  // Handle sign-in with credentials
  const handleSignIn = async (email: string, password: string) => {
    try {
      const result = await signInMutation({ email, password }).unwrap();
      console.log('✅ Logged in:', result);
      await refetchUser();
    } catch (error) {
      console.error('❌ Login failed:', error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await signOutMutation().unwrap();
      await refetchUser(); // Clears cached user
    } catch (error) {
      console.error('❌ Logout failed:', error);
    }
  };

  return {
    user,
    userLoading,
    userError,
    signInState,
    handleSignIn,
    handleSignOut,
  };
};
