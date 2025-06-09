// frontend/src/config/env/env.schema.ts
import { z } from 'zod';

export const envSchema = z
  .object({
    VITE_ENVIRONMENT: z.enum(['development', 'production', 'test'], {
      errorMap: () => ({
        message: "VITE_ENVIRONMENT must be one of: 'development', 'production', 'test'",
      }),
    }),
    VITE_ANALYTICS_ID: z
      .string()
      .regex(/^UA-\d{4,10}-\d{1,4}$/, 'VITE_ANALYTICS_ID must be a valid UA ID'),
    VITE_DEV_EMAIL: z.string().email('VITE_DEV_EMAIL must be a valid email address'),
    VITE_DEV_PASSWORD: z
      .string()
      .min(6, 'VITE_DEV_PASSWORD must be at least 6 characters'),
  })
  .passthrough();
