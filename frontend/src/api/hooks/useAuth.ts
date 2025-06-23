import { useState, useEffect } from 'react';
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

      // Даём куке установиться
      setTimeout(() => {
        setSkipUserQuery(false);
        refetchUser().then((result) => {
          if ('data' in result) {
            console.log('User loaded:', result.data);
          } else {
            console.warn('No user after login');
          }
        });
      }, 100); // можно увеличить при Safari
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

  return {
    user,
    userLoading,
    userError,
    signInState,
    handleSignIn,
    handleSignOut,
  };
};
