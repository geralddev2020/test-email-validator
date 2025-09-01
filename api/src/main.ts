import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // We will allow it for now, for demo purposes
    cors: {
      origin: '*',
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
