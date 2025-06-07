// frontend/src/config/env/env.schema.ts
import { z } from 'zod';

export const envSchema = z.object({
  VITE_ROOT_ID: z.string().min(1, 'VITE_ROOT_ID is required'),
  VITE_API_URL: z.string().url('VITE_API_URL must be a valid URL'),
  VITE_ENVIRONMENT: z.enum(['development', 'production', 'test'], {
    errorMap: () => ({ message: "Invalid enum value. Expected 'development' | 'production' | 'test'" }),
  }),
  VITE_ANALYTICS_ID: z.string().regex(/^UA-\d{4,10}-\d{1,4}$/, {
    message: 'VITE_ANALYTICS_ID must be a valid UA ID',
  }),
  VITE_TIMEOUT_MS: z.coerce.number().positive({ message: 'VITE_TIMEOUT_MS must be a positive number' }),
  VITE_VERSION: z.string().regex(/^\d+\.\d+\.\d+$/, {
    message: 'VITE_VERSION must follow semver format (e.g., 1.0.0)',
  }),
  VITE_DATE_FORMAT: z.string().min(1, 'VITE_DATE_FORMAT is required'),
  VITE_DEV_EMAIL: z.string().email('VITE_DEV_EMAIL must be a valid email address'),
  VITE_DEV_PASSWORD: z.string().min(6, 'VITE_DEV_PASSWORD must be at least 6 characters'),
});
