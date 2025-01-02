import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,  // Usamos 'User' para inyectar el modelo
    private jwtService: JwtService,
  ) {}

  // Método de registro
  async register(authDto: RegisterDto): Promise<User> {
    const { email, password } = authDto;
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ ...authDto, password: hashedPassword });
    return newUser.save();
  }

  // Método de login
  async login(authDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = authDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
