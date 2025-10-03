import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { loggerMiddleware } from './middlewares/logger/logger.middleware';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //applying middleware globally and this was a functional middleware.
  app.use(loggerMiddleware);

  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // app.use(cookieParser());
  app.setGlobalPrefix('api/v1');

  const port = process.env.PROJECT_PORT || 3000;
  await app.listen(port);
  console.log(`Server is running on port:${port}`);
}

bootstrap();
