import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { envSchema } from './src/config/env/env.schema';

// Note: Path aliases like "@" are configured below in the `resolve.alias` section,
// but they only apply to code processed by Vite (i.e., files inside `src/`).
// Since `vite.config.ts` itself runs in Node.js before Vite is initialized,
// you cannot use aliases like "@/..." here — use relative imports instead.

export default defineConfig(({mode}) => {
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
      rollupOptions: {
        external: ['fsevents'],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  };
});
