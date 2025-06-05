import { ClientsModuleAsyncOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { MyKafkaConfig } from "../config/kafka/kafka.config";

export const kafkaClientAsyncConfig: ClientsModuleAsyncOptions = [
  {
    name: 'KAFKA_SERVICE',
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
];
