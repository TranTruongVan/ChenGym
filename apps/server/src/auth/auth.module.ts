import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@server/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
@Module({
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  imports: [UsersModule, JwtModule.register({})],
  controllers: [AuthController],
})
export class AuthModule {}
