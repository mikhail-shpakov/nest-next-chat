import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { getManager } from 'typeorm'

@Injectable()
export class UsersService {
  private readonly manager = getManager() // todo задавать сущности сразу в репозитории

  async findOneByThirdPartyId (thirdPartyId, oauthProvider): Promise<boolean> {
    return !!await this.manager.findOne(User, { where: { thirdPartyId, oauthProvider } })
      .catch((err) => {
        console.error(err)
      })
  }

  async registerOAuthUser (user: User): Promise<User | void> { // todo использовать транзакции
    return this.manager.save(User, user)
      .catch((err) => { // todo продумать обработку ошибок в приложении
        console.error(err)
      })
  }
}
