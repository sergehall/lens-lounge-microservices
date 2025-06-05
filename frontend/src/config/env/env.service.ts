import { loadEnv } from 'vite';
import { envSchema } from './env.schema';
import { z } from 'zod';

type EnvSchema = z.infer<typeof envSchema>;

const mode = process.env.NODE_ENV || 'development';

const raw = loadEnv(mode, process.cwd(), '');
const parsed = envSchema.safeParse(raw);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  throw new Error('❌ Environment validation failed. Check your .env file.');
}

export const env: EnvSchema = parsed.data;
