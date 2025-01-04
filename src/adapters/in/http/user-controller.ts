import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../core/domain/use-cases/create-user.use-case';
import { MongoUserRepository } from '../../out/database/mongo-user.repository';

@Controller('users')
export class UserController {
  private readonly createUserUseCase: CreateUserUseCase;

  constructor(private readonly userRepository: MongoUserRepository) {
    this.createUserUseCase = new CreateUserUseCase(userRepository);
  }

  @Post()
  async create(@Body('name') name: string, @Body('email') email: string) {
    return this.createUserUseCase.execute(name, email);
  }
}
