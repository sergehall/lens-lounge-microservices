import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { Partitioners } from 'kafkajs';

export const kafkaClientConfig: ClientProviderOptions = {
  name: 'KAFKA_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'payment-service-client',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'payment-consumer-group-client',
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  },
};
