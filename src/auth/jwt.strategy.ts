import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { config } from 'dotenv';

config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

  constructor (/*private readonly authService: AuthService*/) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY
    })
  }

  async validate (payload, done: Function) {
    try {
      done(null, payload)
    } catch (err) {
      throw new UnauthorizedException('unauthorized', err.message)
    }
  }

}
