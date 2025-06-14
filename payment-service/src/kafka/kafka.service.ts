// payment-service/src/kafka/kafka.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Consumer, InstrumentationEvent, KafkaJSProtocolError } from 'kafkajs';

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

      consumer.on(events.REQUEST_TIMEOUT, (event: InstrumentationEvent<any>) => {
        this.logger.error(`⏱ Timeout: ${JSON.stringify(event)}`);
      });

      consumer.on(events.REQUEST_QUEUE_SIZE, (event: InstrumentationEvent<{ queueSize?: number }>) => {
        const queueSize = event.payload?.queueSize ?? 'unknown';
        this.logger.warn(`Queue size: ${queueSize}`);
      });

      consumer.on(events.CRASH, (event: InstrumentationEvent<{ error?: KafkaJSProtocolError }>) => {
        const errorMsg = event.payload?.error?.message ?? 'Unknown crash';
        this.logger.error(`Kafka CRASH: ${errorMsg}`);
      });

      consumer.on(events.CONNECT, (event: InstrumentationEvent<{ broker?: string }>) => {
        const broker = event.payload?.broker ?? 'unknown';
        this.logger.log(`Kafka connected: ${broker}`);
      });

      consumer.on(events.DISCONNECT, (event: InstrumentationEvent<any>) => {
        console.log(event);
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
