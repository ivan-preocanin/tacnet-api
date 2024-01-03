import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async getUser(id: string) {
    return this.usersRepo.findById(id);
  }

  async createUser(user: UserDto) {
    return this.usersRepo.create({
      name: user.name,
      age: user.age,
    });
  }
}
