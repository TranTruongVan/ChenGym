import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@server/users/users.service';
import axios from 'axios';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(
    email: string,
    password: string,
    username: string,
    avatarUrl?: string,
  ) {
    //check existing user
    const [userByEmail] = await this.usersService.findByEmail(email);
    const [userByUsername] = await this.usersService.findByUsername(username);

    //every user should be have unique email and username.Because user can use email or username to login
    if (userByEmail || userByUsername) {
      throw new BadRequestException({
        filedErrors: {
          email: userByEmail
            ? 'This email is taken. Please try another.'
            : undefined,
          username: userByUsername
            ? 'This username is taken. Please try another.'
            : undefined,
        },
      });
    }

    //hash the password
    //generate a salt
    const salt = randomBytes(8).toString('hex');
    //hash the salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    //join the hashed result and the salt together
    const hashedPassword = salt + '.' + hash.toString('hex');

    //create a new user and save it
    const newUser = await this.usersService.create(
      email,
      username,
      hashedPassword,
      avatarUrl,
    );

    //return user
    return await this.convertUserIdToJwt(newUser.id);
  }

  async signIn(emailOrUsername: string, password: string) {
    const [userByEmail] = await this.usersService.findByEmail(emailOrUsername);
    const [userByUsername] = await this.usersService.findByUsername(
      emailOrUsername,
    );

    if (!userByEmail && !userByUsername) {
      throw new NotFoundException({
        filedErrors: {
          emailOrUsername: 'Email or username is not registered.',
        },
      });
    }

    const user = userByEmail ? userByEmail : userByUsername;

    if (!user.password) {
      throw new BadRequestException({
        filedErrors: {
          emailOrUsername:
            "This email or username is registered with Google or Facebook. Please use the 'Continue with Google/Facebook' option.",
        },
      });
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') !== storedHash) {
      throw new BadRequestException({
        filedErrors: {
          password: 'Wrong password. Try again.',
        },
      });
    }

    return await this.convertUserIdToJwt(user.id);
  }

  async loginByGoogle(accessTokenGoogle: string) {
    //get user data from Google by access token of Google
    const res = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessTokenGoogle}`,
        },
      },
    );

    const userGoogle: UserGoogle = res.data;

    if (!userGoogle.email_verified) {
      throw new UnauthorizedException({
        message: 'Email is not verified!',
      });
    }

    //check existing user
    const [user] = await this.usersService.findByEmail(userGoogle.email);

    if (!user) {
      const newUser = await this.usersService.create(
        userGoogle.email,
        userGoogle.name,
        undefined, //don't need password for Google login
        userGoogle.picture,
      );

      return await this.convertUserIdToJwt(newUser.id);
    } else {
      return await this.convertUserIdToJwt(user.id);
    }
  }

  async convertUserIdToJwt(userId: number): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: this.configService.get('JWT_SECRET'),
      }),
    };
  }
}

type UserGoogle = {
  name: string;
  picture: string;
  email: string;
  email_verified: true;
};
