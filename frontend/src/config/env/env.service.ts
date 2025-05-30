// src/config/env/env.service.ts

import type { z } from 'zod';

import { envSchema } from './env.schema';

// 1. Typed env schema shape
type EnvSchema = z.infer<typeof envSchema>;

// 2. Collect all REACT_APP_* vars from process.env
const rawEnv: Partial<Record<keyof EnvSchema, string | undefined>> = Object.fromEntries(
  Object.entries(process.env).filter(([key]) => key.startsWith('REACT_APP_'))
) as Partial<Record<keyof EnvSchema, string | undefined>>;

// 3. Validate
const parsed = envSchema.safeParse(rawEnv);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  throw new Error('❌ Environment validation failed. Check your .env file.');
}

// 4. Export strongly-typed, validated environment variables
export const env: EnvSchema = parsed.data;
