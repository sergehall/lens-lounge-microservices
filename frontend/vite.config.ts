import { fileURLToPath } from 'url';
import * as path from 'path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { envSchema } from './src/config/env/env.schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const envVars = loadEnv(mode, process.cwd(), '');
  const parsed = envSchema.safeParse(envVars);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.format());
    throw new Error('❌ Environment validation failed. Check your .env file.');
  }

  const env = parsed.data;

  if (mode === 'development') {
    console.log('✅ mode:', mode);
    console.log('✅ Loaded env:', env);
  }

  return {
    base: '/',
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: true,
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENVIRONMENT),
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
      sourcemap: true,
      outDir: 'dist',
      rollupOptions: {
        external: ['fsevents'],
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});
