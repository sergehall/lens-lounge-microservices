import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyKafkaConfig } from './config/kafka/kafka.config.js';
import { ThrottlerOptions } from './config/throttle/throttler-options.js';
import { KafkaModule } from './kafka/kafka.module.js';
import { KafkaService } from './kafka/kafka.service.js';
import { HttpLoggingMiddleware } from './middlewares/http-logging.middleware.js';
import { CustomConfigModule } from './config/custom.config-module.js';
import { TypeOrmPostgresOptions } from './db/type-orm/options/type-orm-postgres.options.js';
import { PostgresConfig } from './config/db/postgres/postgres.config.js';
import { CqrsModule } from '@nestjs/cqrs';
import { appProviders } from './app.providers.js';

@Module({
  imports: [
    CustomConfigModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmPostgresOptions }),
    ThrottlerModule.forRootAsync({ useClass: ThrottlerOptions }),
    ScheduleModule.forRoot(),
    CqrsModule,
    KafkaModule,
  ],
  controllers: [PaymentController],
  providers: [MyKafkaConfig, KafkaService, AppService, PostgresConfig, ...appProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*');
  }
}
