import { existsSync } from 'fs';

const envMap: Record<string, string> = {
  production: '.env',
  development: '.env.local',
  testing: '.env.test',
};

const NODE_ENV = process.env.NODE_ENV || 'development';
const envFilePath = envMap[NODE_ENV] || '.env';

if (!existsSync(envFilePath)) {
  console.warn(
    `\x1b[33m⚠️  Warning:\x1b[0m Environment file "${envFilePath}" not found.\n` +
      `   You might want to create it, or copy from ".env.example".\n`,
  );
}

export { envFilePath };
