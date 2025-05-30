//  src/hooks/useCurrentUser.ts

import { selectProfile } from '../features/auth/authSlice';
import { ProfileType } from '../features/showcase/profile/mocks/defaultProfile';

import { useAppSelector } from './reduxHooks';

/**
 * Hook: useCurrentUserConfig
 *
 * A flexible and strongly typed hook to access any part of the current user's profile.
 *
 * Supports two usage patterns:
 *   1. Pass a string key to get a specific field from the profile.
 *      useCurrentUserConfig('userId') => string
 *
 *   2. Pass a selector function to compute or extract custom values.
 *      useCurrentUserConfig(profile => profile.firstName + ' ' + profile.lastName) => string
 *
 *  This hook assumes that the user is authenticated and the profile is already loaded.
 * Use only inside protected components/routes.
 */

// Overload 1: when passing a key of Profile, return the specific type of that field
export function useCurrentUserConfig<K extends keyof ProfileType>(selector: K): ProfileType[K];

// Overload 2: when passing a custom selector function
export function useCurrentUserConfig<T>(selector: (profile: ProfileType) => T): T;

// Main implementation
export function useCurrentUserConfig<T>(
  selector: keyof ProfileType | ((profile: ProfileType) => T)
): T {
  // Select the profile from the Redux store
  const profile = useAppSelector(selectProfile);

  // Fail fast if profile is not loaded — this should never happen in authenticated areas
  if (!profile) {
    throw new Error(
      'No profile found. useCurrentUserConfig must be used within authenticated context.'
    );
  }

  // If the selector is a string key, return the corresponding field from the profile
  if (typeof selector === 'string') {
    return profile[selector] as T;
  }

  // If a function selector is provided, call it with the full profile
  return selector(profile);
}
