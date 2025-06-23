import { useEffect, useState } from 'react';
import {
  useSignInMutation,
  useSignOutMutation,
  useGetUserQuery,
} from '../apiSlice';

export const useAuth = () => {
  const [signInMutation, signInState] = useSignInMutation();
  const [signOutMutation] = useSignOutMutation();

  const [skipUserQuery, setSkipUserQuery] = useState(true);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useGetUserQuery(undefined, {
    skip: skipUserQuery,
    refetchOnMountOrArgChange: true,
  });

  const handleSignIn = async (loginOrEmail: string, password: string) => {
    try {
      console.log('Logging in...');
      await signInMutation({ loginOrEmail, password }).unwrap();

      setTimeout(() => {
        setSkipUserQuery(false);
      }, 200);
    } catch (err) {
      console.error('❌ Login failed:', err);
    }
  };


  const handleSignOut = async () => {
    try {
      await signOutMutation().unwrap();
      await refetchUser();
    } catch (err) {
      console.error('❌ Logout failed:', err);
    }
  };

  useEffect(() => {
    if (user) {
      console.log('User loaded from API:', user);
    }
  }, [user]);

  return {
    user,
    userLoading,
    userError,
    signInState,
    handleSignIn,
    handleSignOut,
  };
};
