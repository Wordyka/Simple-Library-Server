import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Member } from './member.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  code: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  stock: number;

  @Column({ type: 'timestamp', nullable: true })
  borrowedAt: Date; 
  
  @ManyToOne(() => Member, member => member.borrowedBooks)
  borrowedBy: Member;
}
