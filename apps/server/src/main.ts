import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      //config to response specific what field is error
      // exceptionFactory: (errors: ValidationError[]) => {
      //   const validationErrors: Record<string, string[]> = {};
      //   errors.forEach((error) => {
      //     const { property, constraints } = error;
      //     if (constraints) {
      //       validationErrors[property] = Object.values(constraints);
      //     }
      //   });

      //   return {
      //     statusCode: 400,
      //     message: { errors: validationErrors },
      //   };
      // },
    }),
  );
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
