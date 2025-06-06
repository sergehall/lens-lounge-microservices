// frontend/src/config/env/env.schema.ts
import { z } from 'zod';

export const envSchema = z
  .object({
    VITE_ROOT_ID: z.string().min(1, 'VITE_ROOT_ID is required'),

    VITE_API_URL: z.string().url('VITE_API_URL must be a valid URL'),

    VITE_ENVIRONMENT: z.enum(['development', 'production', 'test']).default('development'),

    VITE_FEATURE_X_ENABLED: z
      .string()
      .default('false')
      .transform((val) => val === 'true'),

    VITE_MAX_RETRIES: z
      .string()
      .default('3')
      .transform(Number)
      .refine((val) => !isNaN(val) && val >= 0, {
        message: 'VITE_MAX_RETRIES must be a non-negative number',
      }),

    VITE_ANALYTICS_ID: z
      .string()
      .regex(/^UA-\d{4,9}-\d{1,4}$/, 'VITE_ANALYTICS_ID must be a valid UA ID')
      .optional(),

    VITE_TIMEOUT_MS: z
      .string()
      .default('10000')
      .transform(Number)
      .refine((val) => val > 0, {
        message: 'VITE_TIMEOUT_MS must be a positive number',
      }),

    VITE_VERSION: z
      .string()
      .regex(/^\d+\.\d+\.\d+$/, 'VITE_VERSION must follow semver format (e.g., 1.0.0)')
      .default('0.0.1'),

    VITE_DATE_FORMAT: z.string().min(1, 'VITE_DATE_FORMAT is required').default('YYYY-MM-DD'),

    VITE_ALLOWED_ORIGINS: z
      .string()
      .default('')
      .transform((val) =>
        val
          .split(',')
          .map((v) => v.trim())
          .filter(Boolean)
      ),

    VITE_DEV_EMAIL: z.string().email('VITE_DEV_EMAIL must be a valid email address'),

    VITE_DEV_PASSWORD: z.string().min(6, 'VITE_DEV_PASSWORD must be at least 6 characters'),
  })
  .passthrough();
