import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Converte automaticamente dados para os tipos esperados nas classes DTO.
      transform: true,

      // Permite apenas propriedades validadas, ignorando dados não esperados.
      whitelist: true,

      // Lança um erro se a solicitação contiver dados não validados.
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
