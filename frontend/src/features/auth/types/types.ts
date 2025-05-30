//  src/features/auth/types/types.ts

import { JwtPayload } from 'jsonwebtoken';

/**
 * JWT payload used for authentication.
 * You can extend this later (e.g. roles, email).
 */
export interface AuthTokenPayload extends JwtPayload {
  userId: string;
}
