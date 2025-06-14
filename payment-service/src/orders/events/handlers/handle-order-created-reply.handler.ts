import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCreatedReplyEvent } from '../order-created-reply.event.js';
import { Logger } from '@nestjs/common';

@EventsHandler(OrderCreatedReplyEvent)
export class HandleOrderCreatedReplyHandler implements IEventHandler<OrderCreatedReplyEvent> {
  private readonly logger = new Logger(HandleOrderCreatedReplyHandler.name);

  handle(event: OrderCreatedReplyEvent) {
    this.logger.log(`📦 Order processed: ${JSON.stringify(event)}`);
    // business logic here
  }
}
