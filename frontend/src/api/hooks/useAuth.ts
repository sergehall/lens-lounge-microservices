import { useState } from 'react';

// import { useSignOutMutation } from '../apiSlice';
import { DEFAULT_PROFILE, ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

const LOCAL_STORAGE_KEY = 'auth_user';

const getStoredUser = (): ProfileType | undefined => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) return undefined;

  try {
    return JSON.parse(raw) as ProfileType;
  } catch {
    return undefined;
  }
};

export const useAuth = () => {
  // Not currently in use, but needed for future server logout
  // For the future:
  // const [signOutMutation] = useSignOutMutation();

  const [user, setUserInternal] = useState<ProfileType | undefined>(() => getStoredUser());

  const setUser = (u: ProfileType | undefined) => {
    if (u) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(u));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    setUserInternal(u);
  };

  const [signInState, setSignInState] = useState<{
    isLoading: boolean;
    error?: unknown;
    originalArgs?: {
      loginOrEmail: string;
      password: string;
    };
    reset: () => void;
  }>({
    isLoading: false,
    error: undefined,
    originalArgs: undefined,
    reset: () => {
      setSignInState((prev) => ({
        ...prev,
        error: undefined,
        isLoading: false,
        originalArgs: undefined,
      }));
    },
  });

  const handleSignIn = async (loginOrEmail: string, password: string) => {
    try {
      setSignInState((prev) => ({
        ...prev,
        isLoading: true,
        originalArgs: { loginOrEmail, password },
      }));

      console.log('Simulating login...');
      await new Promise((res) => setTimeout(res, 300));

      setUser(DEFAULT_PROFILE);
      window.location.reload();
    } catch (err) {
      console.error('❌ Login failed:', err);
      setSignInState((prev) => ({ ...prev, error: err }));
    } finally {
      setSignInState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSignOut = async () => {
    try {
      // For the future:
      // await signOutMutation().unwrap();

      setUser(undefined);
      console.log('👋 Logged out');
      window.location.reload();
    } catch (err) {
      console.error('❌ Logout failed:', err);
    }
  };

  return {
    user,
    setUser,
    userLoading: false,
    userError: null,
    signInState,
    handleSignIn,
    handleSignOut,
  };
};

//
// import { useEffect, useState } from 'react';
//
// import { useSignInMutation, useSignOutMutation, useGetUserQuery } from '../apiSlice';
//
// export const useAuth = () => {
//   const [signInMutation, signInState] = useSignInMutation();
//   const [signOutMutation] = useSignOutMutation();
//
//   const [shouldFetchUser] = useState(false);
//
//   const {
//     data: user,
//     isLoading: userLoading,
//     error: userError,
//     refetch: refetchUser,
//   } = useGetUserQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//   });
//
//   useEffect(() => {
//     if (shouldFetchUser) {
//       const timeout = setTimeout(() => {}, 300);
//       return () => clearTimeout(timeout);
//     }
//   }, [shouldFetchUser]);
//
//   const handleSignIn = async (loginOrEmail: string, password: string) => {
//     try {
//       console.log('Logging in...');
//       await signInMutation({ loginOrEmail, password }).unwrap();
//
//       setTimeout(() => {
//         refetchUser().then((result) => {
//           if ('data' in result) {
//             console.log('User loaded:', result.data);
//           } else {
//             console.warn('No user after login');
//           }
//         });
//       }, 300); // Safari hack
//     } catch (err) {
//       console.error('❌ Login failed:', err);
//     }
//   };
//
//   const handleSignOut = async () => {
//     try {
//       await signOutMutation().unwrap();
//       await refetchUser(); // Очистка после выхода
//     } catch (err) {
//       console.error('❌ Logout failed:', err);
//     }
//   };
//
//   return {
//     user,
//     userLoading,
//     userError,
//     signInState,
//     handleSignIn,
//     handleSignOut,
//   };
// };
