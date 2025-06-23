import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from 'vitest';

import { useSignInMutation } from '@/api/apiSlice';

export type SignInState = ReturnType<typeof useSignInMutation>[1];
export type RegisterError = FetchBaseQueryError | SerializedError | undefined;
