import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { Partitioners } from "kafkajs";
import { MyKafkaConfig } from "../config/kafka/kafka.config";
import { KafkaConfigModule } from "./kafka-config.module";
import { KafkaService } from "./kafka.service";

@Module({
  imports: [
    KafkaConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        imports: [KafkaConfigModule],
        inject: [MyKafkaConfig],
        useFactory: async (kafkaConfig: MyKafkaConfig) => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: await kafkaConfig.getKafkaConfig('KAFKA_CLIENT_ID'),
              brokers: [await kafkaConfig.getKafkaConfig('KAFKA_BROKER')],
            },
            consumer: {
              groupId: await kafkaConfig.getKafkaConfig('KAFKA_CONSUMER_GROUP_ID'),
            },
            producer: {
              createPartitioner: Partitioners.LegacyPartitioner,
            },
          },
        }),
      },
    ]),
  ],
  providers: [KafkaService],
  exports: [
    KafkaService,
    ClientsModule,
  ],
})
export class KafkaModule {}
