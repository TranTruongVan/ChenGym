import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@server/users/users.service';
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
    const [userByUsername] = await this.usersService.findByName(username);

    //every user should be have unique email and username.Because user can use email or username to login
    if (userByEmail || userByUsername) {
      throw new BadRequestException({
        filedErrors: {
          email: userByEmail
            ? 'That email is taken. Please try another.'
            : undefined,
          username: userByUsername
            ? 'That username is taken. Please try another.'
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
    const result = salt + '.' + hash.toString('hex');

    //create a new user and save it
    const newUser = await this.usersService.create(
      email,
      result,
      username,
      avatarUrl,
    );

    //return user
    return await this.convertUserIdToJwt(newUser.id);
  }

  // async signIn(email: string, password: string) {
  //   const [user] = await this.usersService.find(email);

  //   if (!user) {
  //     throw new NotFoundException({
  //       statusCode: 400,
  //       message: {
  //         errors: {
  //           email: ['email is not registered'],
  //         },
  //       },
  //     });
  //   }

  //   const [salt, storedHash] = user.password.split('.');

  //   const hash = (await scrypt(password, salt, 32)) as Buffer;

  //   if (hash.toString('hex') !== storedHash) {
  //     throw new BadRequestException({
  //       statusCode: 400,
  //       message: {
  //         errors: {
  //           password: ['wrong password'],
  //         },
  //       },
  //     });
  //   }

  //   return await this.convertUserIdToJwt(user.id);
  // }

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
