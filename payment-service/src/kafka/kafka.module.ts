// payment-service/src/kafka/kafka.module.ts
import { CqrsModule } from "@nestjs/cqrs";
import { ClientsModule } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { KafkaConfigModule } from "./kafka-config.module";
import { KafkaListener } from "./kafka.listener";
import { KafkaService } from './kafka.service';
import { kafkaClientAsyncConfig } from "./kafkaClient.config";

@Module({
  imports: [
    KafkaConfigModule,
    ClientsModule.registerAsync(kafkaClientAsyncConfig),
    CqrsModule
  ],
  providers: [KafkaService, KafkaListener],
  exports: [KafkaService, ClientsModule],
})
export class KafkaModule {}

