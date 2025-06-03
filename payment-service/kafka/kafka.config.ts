import { KafkaOptions, Transport } from '@nestjs/microservices';

export const kafkaClientConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'payment-service',
      brokers: ['localhost:9092'], //  or kafka:9092 if inside the container
    },
    consumer: {
      groupId: 'payment-consumer',  // each service must have a unique groupId
    },
  },
};
