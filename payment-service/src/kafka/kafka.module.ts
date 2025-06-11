// payment-service/src/kafka/kafka.module.ts
import { ClientsModule } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { KafkaConfigModule } from "./kafka-config.module";
import { KafkaService } from './kafka.service';
import { kafkaClientAsyncConfig } from "./kafkaClient.config";

@Module({
  imports: [
    KafkaConfigModule,
    ClientsModule.registerAsync(kafkaClientAsyncConfig),
  ],
  providers: [KafkaService],
  exports: [KafkaService, ClientsModule],
})
export class KafkaModule {}

