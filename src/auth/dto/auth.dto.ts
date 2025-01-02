// src/auth/dto/auth.dto.ts

// DTO para el login
export class LoginDto {
    email: string;
    password: string;
  }
  
  // DTO para el registro (puede ser similar al login)
  export class RegisterDto {
    email: string;
    password: string;
    confirmPassword: string;
  }
  