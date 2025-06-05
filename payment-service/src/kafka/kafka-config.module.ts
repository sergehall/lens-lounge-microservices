import { Module } from '@nestjs/common';
import { MyKafkaConfig } from "../config/kafka/kafka.config";

@Module({
  providers: [MyKafkaConfig],
  exports: [MyKafkaConfig]
})
export class KafkaConfigModule {}
