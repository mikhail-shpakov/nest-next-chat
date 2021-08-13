import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../users/user.entity'

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'text' })
  message: string

  @ManyToOne(
    type => User,
    user => user.id,
    { onDelete: 'CASCADE', eager: true }
  )
  @JoinColumn()
  user: User

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'NOW()',
    select: false,
  })
  updatedAt?: Date
}
