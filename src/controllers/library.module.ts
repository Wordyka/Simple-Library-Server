import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from './library.controller';
import { LibraryService } from '../application/services/library.service';
import { MemberRepository } from '../domain/repositories/member.repository';
import { BookRepository } from '../domain/repositories/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MemberRepository, BookRepository])],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
