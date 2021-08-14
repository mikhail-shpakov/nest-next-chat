import { forwardRef, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UsersService } from './users.service'
import { UsersGateway } from './users.gateway'
import { AuthModule } from '../auth/auth.module'
import { SessionsModule } from '../sessions/sessions.module'

@Module({
  controllers: [],
  providers: [
    UsersService,
    UsersGateway
  ],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => SessionsModule),
    TypeOrmModule.forFeature([User])
  ]
})
export class UsersModule {}
