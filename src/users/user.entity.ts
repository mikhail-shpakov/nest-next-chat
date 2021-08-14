import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Session } from '../sessions/session.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  email: string

  @Column()
  name: string

  @Column({
    name: 'oauth_provider',
    enum: ['google'],
  })
  oauthProvider: string

  @Column({
    name: 'third_party_id',
    unique: true,
  })
  thirdPartyId: string

  @Column()
  photo: string

  @OneToMany(
    type => Session,
    session => session.user,
  )
  @JoinColumn()
  sessions?: string[]

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

  // поле не будет добавлено в таблицу
  isOnline?: boolean
}
