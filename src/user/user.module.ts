import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModel, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),  // Usamos el nombre del modelo 'User'
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],  // Exportamos UserService para usarlo en otros módulos
})
export class UserModule {}
