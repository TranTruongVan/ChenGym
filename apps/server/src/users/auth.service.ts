import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(
    email: string,
    password: string,
    username: string,
    avatarUrl?: string,
  ) {
    //check existing user
    const [user] = await this.usersService.find(email);
    if (user) {
      throw new BadRequestException('email in use');
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
    return newUser;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    
    if (!user) {
      throw new NotFoundException('email is not registered');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') !== storedHash) {
      throw new BadRequestException('wrong password');
    }

    return user;
  }
}
