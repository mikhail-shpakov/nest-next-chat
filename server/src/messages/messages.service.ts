import { Injectable } from '@nestjs/common'
import { Message } from './message.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../users/user.entity'

@Injectable()
export class MessagesService {
  constructor (
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAllMessages (): Promise<Message[]> {
    const messages = await this.messagesRepository.find()
    return messages.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
  }

  async addMessage (thirdPartyId: string, message: string) {
    const user = await this.usersRepository.findOne({ where: { thirdPartyId } })

    return this.messagesRepository.save({ user, message })
  }
}
