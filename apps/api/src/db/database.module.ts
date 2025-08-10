import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dataSource = configService.get<DataSourceOptions>('typeorm');
        return {
          ...dataSource,
          port: configService.get<string>('POSTGRES_PORT') || 5432,
          username: configService.get<string>('POSTGRES_USER'),
          password: configService.get<string>('POSTGRES_PASSWORD'),
          database: configService.get<string>('POSTGRES_DB'),
          host: configService.get<string>('POSTGRES_HOST'),
        } as DataSourceOptions;
      },
    }),
  ],
})
export class DatabaseModule {}
