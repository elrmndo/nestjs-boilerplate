import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(this);
    return 'This action adds a new user';
  }

  findAll() {
    console.log(this);
    return `This action returns all users`;
  }

  findOne(id: number) {
    console.log(this);
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(this);
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    console.log(this);
    return `This action removes a #${id} user`;
  }
}
