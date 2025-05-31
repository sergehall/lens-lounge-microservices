import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createApp } from './create-app';
import { TelegramAdapter } from './adapters/telegram/telegram.adapter';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  // // Set global prefix
  // app.setGlobalPrefix('api');

  // Apply configurations using the createApp function (assuming it configures the app)
  createApp(app);

  // Enable CORS for frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from React dev server
    credentials: true,               // Allow cookies, Authorization headers, etc.
  });

  // Retrieve the configuration service to access environment variables
  const configService = app.get(ConfigService<ConfigType, true>);

  // Retrieve the port from environment variables, default to 5005 if not provided
  const port = configService.get<number>('PORT');


  console.log('port', port);
  // Start the application and listen on the specified port
  await app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
  });

  // Get the base URL at which the application is running
  const baseUrl = await app.getUrl();
  console.log(`Application is running on url: ${baseUrl}`);

  const telegramAdapter = await app.resolve(TelegramAdapter);

  await telegramAdapter.setWebhook();
}

// Call the bootstrap function to start the application
bootstrap();
