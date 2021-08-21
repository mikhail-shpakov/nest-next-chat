import { Controller, Get, UseGuards, Res, Req } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { config } from 'dotenv'

config()

@Controller('auth')
export class AuthController {

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin () {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback (@Req() req, @Res() res) {
    const jwt: string = req.user.jwt

    const successPath = `${process.env.CLIENT_ENTRYPOINT}/messenger?jwt=${jwt}`
    const failurePath = `${process.env.CLIENT_ENTRYPOINT}/403`

    res.redirect(jwt ? successPath : failurePath)
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource () {
    return 'JWT is working!'
  }
}
