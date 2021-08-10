import { Injectable } from '@nestjs/common'
import { Message } from './message.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MessagesService {
  constructor (
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async getAllMessages (): Promise<Message[]> {
    return this.messagesRepository.find()
  }

  async addMessage (userId, message) {
    await this.messagesRepository.save({ userId, message })
  }
}
