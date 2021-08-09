import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column({
    name: 'is_online',
    type: 'boolean',
    default: true,
  })
  isOnline?: boolean

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
