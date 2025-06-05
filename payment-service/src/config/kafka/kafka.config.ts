// payment-service/src/config/kafka/kafka.config.ts
import { Injectable } from '@nestjs/common';
import { BaseConfig } from "../base/base.config";
import { KafkaKeysType } from './types/kafka-keys.type';

@Injectable()
export class MyKafkaConfig extends BaseConfig {
  private readonly config: Record<KafkaKeysType, string> = {
    KAFKA_BROKER: 'KAFKA_BROKER',
    KAFKA_CLIENT_ID: 'KAFKA_CLIENT_ID',
    KAFKA_CONSUMER_GROUP_ID: 'KAFKA_CONSUMER_GROUP_ID',
  };

  async getKafkaConfig(key: KafkaKeysType): Promise<string> {
    return this.getValueKafkaByKey(key);
  }
}
