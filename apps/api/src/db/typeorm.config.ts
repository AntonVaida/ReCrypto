import 'dotenv/config';
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

console.log('DB connection:', {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  pass: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
});

const config: DataSourceOptions = {
  type: 'postgres',

  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'postgres',
  database: process.env.POSTGRES_DB ?? 'app_db',

  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],

  synchronize: false,

  ssl: process.env.NODE_ENV === 'local' ? false : { rejectUnauthorized: false },
};

export const typeormConfig = registerAs('typeorm', () => config);

export default new DataSource(config);
