import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOneByThirdPartyId (thirdPartyId, oauthProvider): Promise<boolean> {
    return !!await this.usersRepository.findOne({ where: { thirdPartyId, oauthProvider } })
  }

  async registerOAuthUser (user: User): Promise<User | void> { // todo использовать транзакции
    return this.usersRepository.save(user)
  }
}
