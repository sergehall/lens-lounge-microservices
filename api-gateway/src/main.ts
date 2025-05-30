import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Load environment variables
  dotenv.config();

  // Option 1: Enable CORS with full configuration
  const app = await NestFactory.create(AppModule);

  // CORS (Cross-Origin Resource Sharing) allows frontend (e.g., React) from a different origin to call this backend.
  // NestJS uses the Express `cors` middleware under the hood.
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend origin
    credentials: true,               // Allow cookies, authorization headers, etc.
  });

  // Option 2 (alternative): enable default CORS at creation
  // const app = await NestFactory.create(AppModule, { cors: true });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);

  console.log(`🚀 API Gateway is running on http://localhost:${port}`);
}
bootstrap();
