import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';  // Importamos el tipo de documento
import * as bcrypt from 'bcryptjs';  // Cambia 'bcrypt' por 'bcryptjs'


@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>, // Usamos el nombre 'User' para inyectar el modelo
  ) {}

  // Crear un nuevo usuario
  async createUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ email, password: hashedPassword });
    return newUser.save();
  }

  // Buscar un usuario por email
  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  // Buscar un usuario por ID
  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }
}
