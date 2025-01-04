import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/infrastructure/config/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
