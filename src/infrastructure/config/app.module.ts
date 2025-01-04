import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../modules/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ' mongodb://mongo:27017/nestdb'),
    UserModule,
  ],
})
export class AppModule { }
