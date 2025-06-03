// payment-service/src/app.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KafkaService } from "./kafka/kafka.service";

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post()
  handlePayment(@Body() data: any) {
    // Simulate payment
    console.log('💸 Оплата прошла успешно:', data);

    // Emitim Event
    this.kafkaService.emitPaymentCreated({
      ...data,
      status: 'completed',
    });

    return { message: 'Payment processed' };
  }
}
