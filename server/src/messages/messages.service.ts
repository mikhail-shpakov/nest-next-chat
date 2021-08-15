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
    return this.messagesRepository.find()
  }

  async addMessage (userId: User, message: string) {
    const user = await this.usersRepository.findOne({ where: { id: userId } })

    return this.messagesRepository.save({ user, message })
  }
}
