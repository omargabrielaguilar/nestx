// src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';  // Importa correctamente el DTO

import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';  

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('protected')
  @UseGuards(AuthGuard)  // Protección con JWT
  getProtectedRoute() {
    return { message: 'This route is protected by JWT' };
  }
}
