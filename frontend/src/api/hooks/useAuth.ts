// frontend/src/api/services/useAuth.ts
import { useSignInMutation, useSignOutMutation, useGetUserQuery } from '../apiSlice';

export const useAuth = () => {
  // RTK Query hooks
  const [signInMutation, signInState] = useSignInMutation();
  const [signOutMutation] = useSignOutMutation();
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useGetUserQuery(undefined, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  // Handle sign-in with credentials
  const handleSignIn = async (loginOrEmail: string, password: string) => {
    try {
      console.log('Attempting login…');
      await signInMutation({ loginOrEmail, password }).unwrap();

      const result = await refetchUser();

      if ('data' in result) {
        console.log('Current user:', result.data);
      } else {
        console.warn('No user returned after login');
      }
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
