// frontend/src/config/env/env.service.ts

import { z } from 'zod';
import { envSchema } from './env.schema';

// Access raw Vite environment variables
const viteEnv = import.meta.env;

// Validate environment variables using the defined schema
const parsed = envSchema.safeParse(viteEnv);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:\n', parsed.error.format());
  throw new Error('❌ Environment validation failed. Please check your .env.* files.');
}

// Export validated and typed environment variables
export const env = parsed.data;

// Optional: export type for IDE auto-completion and static typing
export type Env = typeof env;
