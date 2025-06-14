// payment-service/src/config/kafka/kafka.config.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseConfig } from '../base/base.config.js';
import { KafkaKeysType } from './types/kafka-keys.type.js';

@Injectable()
export class MyKafkaConfig extends BaseConfig {
  private readonly config: Record<KafkaKeysType, string> = {
    KAFKA_BROKER: 'KAFKA_BROKER',
    KAFKA_CLIENT_ID: 'KAFKA_CLIENT_ID',
    KAFKA_CONSUMER_GROUP_ID: 'KAFKA_CONSUMER_GROUP_ID',
  };

  private async getKafkaValue(key: KafkaKeysType): Promise<string> {
    if (Object.prototype.hasOwnProperty.call(this.config, key)) {
      return this.getValueKafkaByKey(key);
    } else {
      throw new BadRequestException(`Key ${key} not found in MyKafka configuration`);
    }
  }

  async getKafkaConfig(key: KafkaKeysType): Promise<string> {
    return this.getKafkaValue(key);
  }
}
