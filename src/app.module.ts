import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Member } from './domain/entities/member.entity';
import { Book } from './domain/entities/book.entity';
import { LibraryModule } from './controllers/library.module';

@Module({
  imports: [
    // Import the ConfigModule globally to use environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule global, no need to import in other modules
    }),
    // Use TypeOrmModule.forRootAsync to configure TypeORM using ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Member, Book],
        synchronize: true, // Do not use this in production as it auto-syncs entities
      }),
      inject: [ConfigService],
    }),
    LibraryModule,
  ],
})
export class AppModule {}
