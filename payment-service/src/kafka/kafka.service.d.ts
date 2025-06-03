import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
export declare class KafkaService implements OnModuleInit, OnModuleDestroy {
    private readonly kafkaClient;
    constructor(kafkaClient: ClientKafka);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    emitPaymentCreated(data: any): import("rxjs").Observable<any>;
}
