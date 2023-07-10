import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  create(
    email: string,
    username: string,
    password?: string,
    avatarUrl?: string,
  ) {
    const user = this.repo.create({ email, password, username, avatarUrl });

    return this.repo.save(user);
  }

  async findOneById(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repo.find({ where: { email } });
  }

  findByUsername(username: string) {
    return this.repo.find({ where: { username } });
  }

  async update(id: number, attrs: Partial<UserEntity>) {
    const user = await this.findOneById(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOneById(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return this.repo.remove(user);
  }
}
