import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Serialize } from 'apps/server/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Request } from 'express';
import { MyJwtGuard } from '@server/auth/guard/myjwt.guard';
import { CurrentUser } from '@server/auth/decorators/current-user.decorator';
import { UserEntity } from './user.entity';
@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(MyJwtGuard)
  @Get('/who-am-i')
  async whoAmI(@CurrentUser() user: UserEntity) {
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOneById(parseInt(id));

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
