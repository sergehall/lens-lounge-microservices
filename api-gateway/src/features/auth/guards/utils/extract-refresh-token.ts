// api-gateway/src/features/auth/guards/utils/extract-refresh-token.ts

import { HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { jwtCookiesIncorrect } from "../../../../common/filters/custom-errors-messages";

export function extractRefreshToken(req: Request): string {
  const cookie = req.cookies?.refreshToken;

  if (typeof cookie === 'string') {
    return cookie;
  }

  if (cookie && typeof cookie.refreshToken === 'string') {
    return cookie.refreshToken;
  }

  throw new HttpException({ message: [jwtCookiesIncorrect] }, HttpStatus.UNAUTHORIZED);
}
