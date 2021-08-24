import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { sign, verify } from 'jsonwebtoken'
import { config } from 'dotenv'
import { UsersService } from '../users/users.service'
import { User } from '../users/user.entity'

config()

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

  constructor (private readonly usersService: UsersService) {}

  async validateOAuthLogin (user: User): Promise<string> {
    try {
      const isUserExist: boolean = await this.usersService.findOneByThirdPartyId(user.thirdPartyId, user.oauthProvider)

      if (!isUserExist) {
        await this.usersService.registerOAuthUser(user)
      }

      return sign(user, this.JWT_SECRET_KEY, { expiresIn: 3600 })
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message)
    }
  }

  validateJwtToken (token: string): User {
    /** При необходимости здесь можно реализовать
     * дополнительную логику для проверки прав пользователя
     */
    return <User>verify(token, this.JWT_SECRET_KEY)
  }
}
