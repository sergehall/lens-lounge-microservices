
import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST_HEROKU,
  port: parseInt(process.env.PG_HOST_HEROKU as string, 10) || 5432,
  username: process.env.PG_HEROKU_USER_NAME,
  password: process.env.PG_HEROKU_USER_PASSWORD,
  database: process.env.PG_HEROKU_NAME_DATABASE,
  ssl: { rejectUnauthorized: false },
  migrationsTableName: 'migrationsNest',
  entities: [

  ],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'], // Specify the path to your migrations
});
