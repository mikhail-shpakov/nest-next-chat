import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { MessagesModule } from './messages/messages.module'
import { SessionsModule } from './sessions/sessions.module'
import * as process from 'process'

const username = process.env.POSTGRES_USER || 'postgres'
const database = process.env.POSTGRES_DB || username
const password = process.env.POSTGRES_PASSWORD || 'example'
const host = process.env.DB_HOST || 'localhost'
const port = Number(process.env.DB_PORT) || 5432

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    MessagesModule,
    SessionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
