import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para el frontend (ajusta la URL del frontend según sea necesario)
  app.enableCors({
    origin: 'http://localhost:5000',  // La URL de tu frontend de Svelte
  });

  await app.listen(3000);
  dotenv.config();
}
bootstrap();




