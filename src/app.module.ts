import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
