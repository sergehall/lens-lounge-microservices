import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientsModule } from "@nestjs/microservices";
import { PaymentController } from "./app.controller";
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyKafkaConfig } from "./config/kafka/kafka.config";
import { ThrottlerOptions } from './config/throttle/throttler-options';
import { KafkaModule } from "./kafka/kafka.module";
import { KafkaService } from "./kafka/kafka.service";
import { kafkaClientAsyncConfig } from "./kafka/kafkaClient.config";
import { HttpLoggingMiddleware } from './middlewares/http-logging.middleware';
import { CustomConfigModule } from './config/custom.config-module';
import { TypeOrmPostgresOptions } from './db/type-orm/options/type-orm-postgres.options';
import { PostgresConfig } from './config/db/postgres/postgres.config';
import { CqrsModule } from '@nestjs/cqrs';
import { appProviders } from './app.providers';


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
  providers: [
    KafkaService,
    AppService,
    PostgresConfig,
    ...appProviders,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*');
  }
}

