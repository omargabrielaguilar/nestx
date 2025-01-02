import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module'; // Asegúrate de que UserModule esté importado aquí
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,  // Asegúrate de que UserModule esté importado
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'default',
        signOptions: { expiresIn: '60m' },
    }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
