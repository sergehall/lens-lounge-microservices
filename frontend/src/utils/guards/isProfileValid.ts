// src/utils/guards/isProfileValid.ts

import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

/**
 * Type guard to validate whether the given value is a valid ProfileType.
 */
export const isProfileValid = (profile: unknown): profile is ProfileType => {
  if (typeof profile !== 'object' || profile === null) return false;

  const p = profile as Record<string, unknown>;

  return (
    typeof p.userId === 'string' &&
    typeof p.firstName === 'string' &&
    typeof p.lastName === 'string' &&
    typeof p.username === 'string' &&
    typeof p.email === 'string' &&
    typeof p.photoUrl === 'string' &&
    typeof p.birthday === 'string' &&
    typeof p.education === 'string' &&
    typeof p.website === 'string'
  );
};
