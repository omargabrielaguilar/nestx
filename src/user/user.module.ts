import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema, UserModel } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registra el esquema
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [MongooseModule],  // Exporta MongooseModule para que otros módulos lo puedan usar
})
export class UserModule {}
