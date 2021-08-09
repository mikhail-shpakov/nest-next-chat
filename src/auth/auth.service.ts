import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { sign } from 'jsonwebtoken'
import { config } from 'dotenv'
import { UsersService } from '../users/users.service'
import { User } from '../users/user.entity'

config()

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

  constructor (private readonly usersService: UsersService) {}

  async validateOAuthLogin (user: User, photo: string): Promise<string> {
    try {
      const isUserExist: boolean = await this.usersService.findOneByThirdPartyId(user.thirdPartyId, user.oauthProvider)

      if (!isUserExist) {
        await this.usersService.registerOAuthUser(user)
      }

      const payload = {
        ...user,
        photo,
      }

      return sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 })
    } catch (err) { // todo возможно стоит использовать такие ошибки
      throw new InternalServerErrorException('validateOAuthLogin', err.message)
    }
  }
}
