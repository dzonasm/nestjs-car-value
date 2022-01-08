import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {
  }
 @Post('/signup')
  async createUser(@Body() body: CreateUserDto): Promise<void>{
    await this.usersService.create(body.email, body.password)
  }
}
