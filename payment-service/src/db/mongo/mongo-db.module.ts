import { Module } from '@nestjs/common';
import { mongoConnectionProviders } from './mongo-db.providers.js';
import { MongoConnectionService } from './mongo-connection.service.js';

@Module({
  providers: [MongoConnectionService, ...mongoConnectionProviders],
  exports: [...mongoConnectionProviders],
})
export class MongoConnectionModule {}
