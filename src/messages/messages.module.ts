import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from './message.entity'
import { MessagesService } from './messages.service'

@Module({
  controllers: [],
  providers: [MessagesService],
  exports: [MessagesService],
  imports: [
    TypeOrmModule.forFeature([Message])
  ]
})
export class MessagesModule {}
