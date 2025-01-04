import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../../core/domain/entities/user.entity';
import { IUserRepository } from '../../../core/domain/interfaces/user-repository.interface';

@Injectable()
export class MongoUserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
}
