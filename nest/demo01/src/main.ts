import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 1800, //需要浏览器控制台 开启缓存
  });

  await app.listen(3000);
}
bootstrap();
