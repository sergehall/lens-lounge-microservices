import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientsModule } from "@nestjs/microservices";
import { PaymentController } from "./app.controller";
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerOptions } from './config/throttle/throttler-options';
import { KafkaService } from "./kafka/kafka.service";
import { kafkaClientConfig } from "./kafka/kafkaClient.config";
import { HttpLoggingMiddleware } from './middlewares/http-logging.middleware';
import { CustomConfigModule } from './config/custom.config-module';
import { TypeOrmPostgresOptions } from './db/type-orm/options/type-orm-postgres.options';
import { PostgresConfig } from './config/db/postgres/postgres.config';
import { CqrsModule } from '@nestjs/cqrs';
import { appProviders } from './app.providers';

@Module({
  imports: [
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresOptions, // Use the OrmOptions class as the stripe
    }),
    ThrottlerModule.forRootAsync({
      useClass: ThrottlerOptions, // Use the ThrottlerModuleOptions class as the stripe
    }),
    ScheduleModule.forRoot(),
    CqrsModule,
    ClientsModule.register([kafkaClientConfig]),
  ],
  controllers: [PaymentController],
  providers: [
    KafkaService,
    AppService,
    PostgresConfig,
    ...appProviders,
  ],
  exports: [KafkaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*'); // Apply logger middleware to all routes
  }
}
