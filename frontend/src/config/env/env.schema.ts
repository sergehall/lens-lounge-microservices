import { z } from 'zod';

export const envSchema = z
  .object({
    REACT_APP_ROOT_ID: z.string().min(1),
    REACT_APP_API_URL: z.string().url(),
    REACT_APP_ENVIRONMENT: z.enum(['development', 'production', 'test']).default('development'),
    REACT_APP_FEATURE_X_ENABLED: z
      .string()
      .default('false')
      .transform((val) => val === 'true'),

    REACT_APP_MAX_RETRIES: z
      .string()
      .default('3')
      .transform(Number)
      .refine((val) => !isNaN(val) && val >= 0, {
        message: 'REACT_APP_MAX_RETRIES must be a non-negative number',
      }),

    REACT_APP_ANALYTICS_ID: z
      .string()
      .regex(/^UA-\d{4,9}-\d{1,4}$/, 'Must be a valid UA ID')
      .optional(),

    REACT_APP_TIMEOUT_MS: z
      .string()
      .default('10000')
      .transform(Number)
      .refine((val) => val > 0, {
        message: 'REACT_APP_TIMEOUT_MS must be a positive number',
      }),

    REACT_APP_VERSION: z
      .string()
      .regex(/^\d+\.\d+\.\d+$/, 'Must follow semver (e.g., 1.0.0)')
      .default('0.0.1'),

    REACT_APP_DATE_FORMAT: z.string().min(1).default('YYYY-MM-DD'),

    REACT_APP_ALLOWED_ORIGINS: z
      .string()
      .default('')
      .transform((val) =>
        val
          .split(',')
          .map((v) => v.trim())
          .filter(Boolean)
      ),
  })
  .strict();
