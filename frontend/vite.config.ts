import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { envSchema } from './src/config/env/env.schema';

export default defineConfig(({ mode }) => {
  const envVars = loadEnv(mode, process.cwd(), '');
  const parsed = envSchema.safeParse(envVars);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.format());
    throw new Error('❌ Environment validation failed. Check your .env file.');
  }

  const env = parsed.data;

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.REACT_APP_ENVIRONMENT),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimizeDeps: {
      exclude: ['fsevents'],
    },
    build: {
      rollupOptions: {
        external: ['fsevents'],
      },
    },
  };
});
