import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { GoogleLoginDto } from './dtos/google-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/google-login')
  async login(@Body() body: GoogleLoginDto) {
    return await this.authService.loginByGoogle(body.accessTokenGoogle);
  }

  @Post('/sign-up')
  async createUser(@Body() body: SignUpDto) {
    return await this.authService.signUp(
      body.email.toLowerCase(),
      body.password,
      body.username,
      body.avatarUrl,
    );
  }

  @Post('/sign-in')
  async signIn(@Body() body: SignInDto) {
    return await this.authService.signIn(body.emailOrUsername, body.password);
  }
}
