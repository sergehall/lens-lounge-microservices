import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Configuration from './configuration.js';
import { envFilePath } from '../detect-env.js';
import { validationSchemaConfiguration } from './validation-schema.configuration.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      cache: true,
      validationSchema: validationSchemaConfiguration,
      load: [Configuration.getConfiguration],
    }),
  ],
})
export class CustomConfigModule {}
