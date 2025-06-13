// payment-service/src/app.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service.js';
import { KafkaService } from './kafka/kafka.service.js';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(
    private readonly kafkaService: KafkaService,
    private readonly appService: AppService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  handlePayment(@Body() data: any) {
    // Simulate payment
    console.log('The payment was successful:', data);

    // Emitim Event
    this.kafkaService.emitPaymentCreated({
      ...data,
      status: 'completed',
    });

    return { message: 'Payment processed' };
  }
}
