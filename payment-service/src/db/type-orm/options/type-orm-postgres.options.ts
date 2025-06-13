import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PostgresConfig } from '../../../config/db/postgres/postgres.config.js';

@Injectable()
export class TypeOrmPostgresOptions
  extends PostgresConfig
  implements TypeOrmOptionsFactory
{
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const host = await this.getPostgresConfig('PG_HOST_HEROKU');
    const port = await this.getPort('PG_PORT');
    const username = await this.getPostgresConfig('PG_HEROKU_USER_NAME');
    const password = await this.getPostgresConfig('PG_HEROKU_USER_PASSWORD');
    const database = await this.getPostgresConfig('PG_HEROKU_NAME_DATABASE');

    return {
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false },
      entities: [],
      synchronize: true,
      logging: false,
    };
  }
}
