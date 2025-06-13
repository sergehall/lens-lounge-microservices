// payment-service/src/kafka/kafkaClient.config.ts
import { MyKafkaConfig } from '../config/kafka/kafka.config.js';
import { KafkaConfigModule } from './kafka-config.module.js';
import { ClientsModuleAsyncOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const kafkaClientAsyncConfig: ClientsModuleAsyncOptions = [
  {
    name: 'KAFKA_SERVICE',
    inject: [MyKafkaConfig],
    imports: [KafkaConfigModule],
    useFactory: async (kafkaConfig: MyKafkaConfig) => {
      const clientId = await kafkaConfig.getKafkaConfig('KAFKA_CLIENT_ID');
      const broker =
        (await kafkaConfig.getKafkaConfig('KAFKA_BROKER')) || 'kafka:9092';
      const groupId = await kafkaConfig.getKafkaConfig(
        'KAFKA_CONSUMER_GROUP_ID',
      );

      if (!broker) {
        throw new Error(
          'Kafka broker is not defined! Check your .env or Docker environment',
        );
      }

      return {
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId,
            brokers: [broker],
          },
          consumer: {
            groupId,
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
          },
        },
      };
    },
  },
];
