import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from './message.entity'
import { MessagesService } from './messages.service'
import { MessagesGateway } from './message.gateway'
import { UsersModule } from '../users/users.module'
import { User } from '../users/user.entity'

@Module({
  controllers: [],
  providers: [
    MessagesService,
    MessagesGateway,
  ],
  exports: [MessagesService],
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Message, User]),
  ]
})
export class MessagesModule {}
