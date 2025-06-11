import { MessagePattern, Payload } from '@nestjs/microservices';
import { Injectable, Logger } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { OrderCreatedReplyEvent } from '../orders/events/order-created-reply.event';
import { OrderCreatedReplyMessage } from "./types/OrderCreatedReplyMessage";

@Injectable()
export class KafkaListener {
  private readonly logger = new Logger(KafkaListener.name);

  constructor(private readonly eventBus: EventBus) {}

  @MessagePattern('order-created.reply')
  onOrderCreatedReply(@Payload() message: OrderCreatedReplyMessage) {
    try {
      this.logger.log(`Received Kafka message: ${JSON.stringify(message)}`);

      if (!message?.orderId || !message?.status || !message?.timestamp) {
        this.logger.warn(`Invalid Kafka message format`);
        return;
      }

      const event = new OrderCreatedReplyEvent(
        message.orderId,
        message.status,
        message.timestamp,
      );

      this.eventBus.publish(event);
    } catch (error) {
      this.logger.error(`❌ Error handling Kafka message: ${error.message}`, error.stack);
    }
  }
}
