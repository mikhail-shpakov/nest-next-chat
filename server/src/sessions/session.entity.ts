import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../users/user.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ unique: true })
  session: string

  @ManyToOne(
    type => User,
    user => user.id,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn()
  user: User

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
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
