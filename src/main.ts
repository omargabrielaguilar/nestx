import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para el frontend (ajusta la URL del frontend según sea necesario)
  app.enableCors({
    origin: 'http://localhost:8080',  // La URL de tu frontend de Svelte
  });
  dotenv.config();

  await app.listen(3000, '0.0.0.0');  // Escuchar en todas las interfaces
}
bootstrap();




