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

  // // Enable CORS for frontend
  // app.enableCors({
  //   origin: [
  //     'http://localhost:5173',         // vite dev server and dev frontend
  //     'https://lens-lounge.com',       // production frontend
  //   ],
  //   credentials: true,                 // включает куки/авторизацию
  // });

  // Retrieve the configuration service to access environment variables
  const configService = app.get(ConfigService<ConfigType, true>);

  // Retrieve the port from environment variables, default to 5005 if not provided
  const port = configService.get<number>('PORT');


  // Start the application and listen on the specified port
  await app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
  });

  // Get the base URL at which the application is running
  const baseUrl = await app.getUrl();
  console.log(`Application api-gateway is running on url: ${baseUrl}`);

  const telegramAdapter = await app.resolve(TelegramAdapter);

  await telegramAdapter.setWebhook();
}

// Call the bootstrap function to start the application
bootstrap();
