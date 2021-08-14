import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SessionsService } from './sessions.service'
import { Session } from './session.entity'
import { User } from '../users/user.entity'

@Module({
  controllers: [],
  providers: [SessionsService],
  exports: [SessionsService],
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Session])
  ]
})
export class SessionsModule {}
