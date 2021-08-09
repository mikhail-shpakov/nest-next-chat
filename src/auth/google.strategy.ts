import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { config } from 'dotenv';
import { AuthService, Provider } from "./auth.service";

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(private readonly authService: AuthService) {
    super({
      clientID    : process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL : 'http://localhost:3000/auth/google/callback',
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
      // const { name, emails, photos } = profile

      console.log(profile); // todo передавать в сервис profile и создавать или находить юзера в БД

      const jwt = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
      const user = { jwt }

      done(null, user);
    }
    catch(err) {
      done(err, false);
    }
  }
}
