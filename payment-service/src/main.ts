import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createApp } from './create-app.js';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/configuration.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  // Apply all app-level configurations including Kafka setup
  await createApp(app);

  // Enable CORS (can also be moved to createApp if desired)
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const configService = app.get(ConfigService<ConfigType, true>);
  const port = configService.get<number>('PORT') || 5006;

  await app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
  });

  const baseUrl = await app.getUrl();
  console.log(`🚀 Application payment-service is running on url: ${baseUrl}`);
}

bootstrap();
