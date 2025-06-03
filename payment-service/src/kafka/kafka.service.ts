import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
  Inject,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Consumer, InstrumentationEvent, Kafka } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaService.name);

  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('order-created');
    await this.kafkaClient.connect();

    const consumer: Consumer = this.kafkaClient['consumer'];

    if (consumer) {
      const events = consumer.events;

      consumer.on(events.REQUEST_TIMEOUT, (event) => {
        this.logger.error(`⏱ Timeout: ${JSON.stringify(event)}`);
      });

      consumer.on(events.REQUEST_QUEUE_SIZE, (event) => {
        this.logger.warn(`Queue size: ${event.payload.queueSize}`);
      });

      consumer.on(events.CRASH, (event) => {
        this.logger.error(`Kafka CRASH: ${event.payload.error?.message}`);
      });

      consumer.on(events.CONNECT, (event: InstrumentationEvent<{ broker: string }>) => {
        this.logger.log(`Kafka connected: ${event.payload.broker}`);
      });

      consumer.on(events.DISCONNECT, (event) => {
        this.logger.warn(`Kafka consumer disconnected`);
      });
    }
  }

  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  emitPaymentCreated(data: any) {
    return this.kafkaClient.emit('payment-created', data);
  }
}
