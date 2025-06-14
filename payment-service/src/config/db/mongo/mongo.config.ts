import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseConfig } from '../../base/base.config.js';
import { MongoDbKeysType } from './types/mongo-db-keys.type.js';

@Injectable()
export class MongoConfig extends BaseConfig {
  private config: Record<string, string> = {
    MONGO_URI_LOCAL: 'MONGO_URI_LOCAL',
    ATLAS_URI: 'ATLAS_URI',
    NEST_DATABASE: 'NEST_DATABASE',
    TEST_DATABASE: 'TEST_DATABASE',
    DEV_DATABASE: 'DEV_DATABASE',
    PROD_NEST_DATABASE: 'PROD_NEST_DATABASE',
  };

  private async getMongoValue(key: MongoDbKeysType): Promise<string> {
    if (Object.prototype.hasOwnProperty.call(this.config, key)) {
      return this.getValueMongoByKey(key);
    } else {
      throw new BadRequestException(`Key ${key} not found in Postgres configuration`);
    }
  }

  async getMongoConfig(key: MongoDbKeysType): Promise<string> {
    return this.getMongoValue(key);
  }
}
