import { INestApplication } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import Configuration, { ConfigType } from './config/configuration.js';

import cookieParser from 'cookie-parser';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module.js';
import { HttpExceptionResponseFilter } from './common/filters/http-exception-response-filter.js';
import { TrimPipe } from './common/pipes/trim.pipe.js';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Setup DI container
 */
function setupContainer(app: INestApplication): void {
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
}

/**
 * Exception filters
 */
function setupExceptionFilter(app: INestApplication): void {
  app.useGlobalFilters(new HttpExceptionResponseFilter());
}

/**
 * Middlewares
 */
function setupCookieParser(app: INestApplication): void {
  app.use(cookieParser());
}

/**
 * Pipes
 */
function setupGlobalPipes(app: INestApplication): void {
  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({
      transform: true,
      stopAtFirstError: false,
      exceptionFactory: (errors) => {
        const formatted = errors.map((e) => ({
          field: e.property,
          message: JSON.stringify(e.constraints),
        }));
        throw new BadRequestException(formatted);
      },
    }),
  );
}

/**
 * Swagger
 */
function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('IT-Incubator API')
    .setDescription('NestJS training API')
    .setVersion('36.0')
    .addSecurity('bearer', { type: 'http', scheme: 'bearer' })
    .addSecurity('basic', { type: 'http', scheme: 'basic' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
}

/**
 * Kafka microservice
 */
async function setupKafka(app: INestApplication): Promise<void> {
  const kafkaConfig: ConfigType = Configuration.getConfiguration();
  const clientId = kafkaConfig.kafka.KAFKA_CLIENT_ID;
  const broker = kafkaConfig.kafka.KAFKA_BROKER;
  const groupId = kafkaConfig.kafka.KAFKA_CONSUMER_GROUP_ID;

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: { clientId, brokers: [broker] },
      consumer: { groupId },
    },
  });

  await app.startAllMicroservices();
}
function setupCors(app: INestApplication): void {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
}

/**
 * Global app config
 */
export const createApp = async (app: INestApplication): Promise<INestApplication> => {
  setupContainer(app);
  setupExceptionFilter(app);
  setupCookieParser(app);
  setupGlobalPipes(app);
  setupSwagger(app);
  setupCors(app);
  await setupKafka(app);

  return app;
};
