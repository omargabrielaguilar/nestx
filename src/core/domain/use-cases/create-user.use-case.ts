import { User } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/user-repository.interface';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) { }

  async execute(name: string, email: string): Promise<User> {
    const user = new User(Math.random().toString(), name, email); // Generar ID único (temporal)
    return this.userRepository.create(user);
  }
}
