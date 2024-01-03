import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findById(id: string) {
    return this.userModel.findById(id);
  }

  async create(user: UserDto) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
}
