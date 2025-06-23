// frontend/src/api/hooks/useAuth.ts

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
  const [shouldFetchUser] = useState(false);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (shouldFetchUser) {
      const timeout = setTimeout(() => {
        setSkipUserQuery(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [shouldFetchUser]);

  const handleSignIn = async (loginOrEmail: string, password: string) => {
    try {
      console.log('Logging in...');
      await signInMutation({ loginOrEmail, password }).unwrap();

      setSkipUserQuery(false); // immediately authorize the request
      setTimeout(() => {
        refetchUser().then((result) => {
          if ('data' in result) {
            console.log('User loaded:', result.data);
          } else {
            console.warn('No user after login');
          }
        });
      }, 300); // Safari hack
    } catch (err) {
      console.error('❌ Login failed:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutMutation().unwrap();
      await refetchUser(); // Очистка после выхода
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
