import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/adapters/in/http/user-controller';
import { MongoUserRepository } from '../../adapters/out/database/mongo-user.repository';
import { UserSchema } from '../../adapters/out/database/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), 
  ],
  controllers: [UserController],
  providers: [MongoUserRepository],
})
export class UserModule { }
