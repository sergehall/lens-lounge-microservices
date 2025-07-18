import { envSchema } from './env.schema';

// Извлекаем только переменные с префиксом VITE_
const viteEnv = Object.fromEntries(
  Object.entries(import.meta.env).filter(([key]) => key.startsWith('VITE_'))
);

const parsed = envSchema.safeParse(viteEnv);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:\n');
  const errors = parsed.error.format();
  for (const [key, value] of Object.entries(errors)) {
    if (key === '_errors') continue;
    const field = value as { _errors?: string[] };
    field._errors?.forEach((msg) => console.error(`→ ${key}: ${msg}`));
  }
  throw new Error(
    '❌ Environment validation failed. Please check your .env.* files or GitHub Secrets.'
  );
}

// Typed env
export const env = parsed.data;
