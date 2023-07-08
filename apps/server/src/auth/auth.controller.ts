import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { SignInDto } from './dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  async createUser(@Body() body: SignUpDto) {
    return await this.authService.signUp(
      body.email.toLowerCase(),
      body.password,
      body.username,
      body.avatarUrl,
    );
  }

  // @Post('/sign-in')
  // async signIn(@Body() body: SignInDto) {
  //   return await this.authService.signIn(body.email, body.password);
  // }

  @Post('/sign-out')
  async signOut(@Session() session: any) {
    session.userId = null;
  }
}
