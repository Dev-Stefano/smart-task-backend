// Entry point of the NestJS application
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // server listens on port 3000
  console.log(`🚀 Backend running at http://localhost:3000`);
}
bootstrap();
