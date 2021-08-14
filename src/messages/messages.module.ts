import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from './message.entity'
import { MessagesService } from './messages.service'
import { MessagesGateway } from './messages.gateway'
import { UsersModule } from '../users/users.module'
import { User } from '../users/user.entity'
import { AuthModule } from '../auth/auth.module'

@Module({
  controllers: [],
  providers: [
    MessagesService,
    MessagesGateway,
  ],
  exports: [MessagesService],
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Message, User]),
  ]
})
export class MessagesModule {}
