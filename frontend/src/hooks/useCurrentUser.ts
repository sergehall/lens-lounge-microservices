import { selectProfile } from '@/features/auth/authSlice';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

import { useAppSelector } from './reduxHooks';

/* eslint-disable @typescript-eslint/no-redeclare */
export function useCurrentUserConfig<K extends keyof ProfileType>(selector: K): ProfileType[K];
export function useCurrentUserConfig<T>(selector: (profile: ProfileType) => T): T;
/* eslint-enable @typescript-eslint/no-redeclare */

export function useCurrentUserConfig<T>(
  selector: keyof ProfileType | ((profile: ProfileType) => T)
): T {
  const profile = useAppSelector(selectProfile);

  if (!profile) {
    throw new Error(
      'No profile found. useCurrentUserConfig must be used within authenticated context.'
    );
  }

  if (typeof selector === 'string') {
    return profile[selector] as T;
  }

  return selector(profile);
}
