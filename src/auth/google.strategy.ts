import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { config } from 'dotenv'
import { AuthService } from './auth.service'
import { User } from '../users/user.entity'

config()

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor (private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${process.env.SERVER_ENTRYPOINT}/auth/google/callback`,
      passReqToCallback: true,
      scope: ['email', 'profile'],
    })
  }

  async validate (
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    try {
      const {
        id: thirdPartyId,
        displayName: name,
        emails,
        photos,
        provider,
      } = profile

      const email = emails[0].value
      const photo = photos[0].value

      const user: User = {
        email,
        name,
        photo,
        thirdPartyId,
        oauthProvider: provider,
      }

      const jwt = await this.authService.validateOAuthLogin(user)
      const token = { jwt }

      done(null, token)
    } catch (err) {
      done(err, false)
    }
  }
}
