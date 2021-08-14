import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../users/user.entity'
import { Session } from './session.entity'

@Injectable()
export class SessionsService {
  constructor (
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAllUserSessions (userId): Promise<Session[]> {
    const user = await this.usersRepository.findOne({ where: { id: userId } })

    return this.sessionsRepository.find({ where: { user } })
  }

  async addSession (thirdPartyId: string, session: string) {
    const user = await this.usersRepository.findOne({ where: { thirdPartyId } })
    await this.sessionsRepository.save({ user, session })
  }

  async removeSession (session: string) {
    await this.sessionsRepository.delete({ session })
  }
}
