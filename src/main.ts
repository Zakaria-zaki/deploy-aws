import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger config
  const swaggerCustomOptions: SwaggerCustomOptions = {
    customSiteTitle: 'HTTP API CHALLENGE',
    swaggerOptions: {
      docExpansion: 'none',
      persistAuthorization: true,
    },
  };

  const config = new DocumentBuilder()
    .setTitle('API HTTP Project')
    .setContact('API HTTP Project', 'esgi-5IW2.fr', '5IW2-Groupe-5@contact.com')
    .setDescription(`Nest summary`)
    .setVersion('1')
    .addBearerAuth({
      description: `[just text field] Please enter token in following format: Bearer <JWT>`,
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .build();

  const doc = SwaggerModule.createDocument(app, config, {
    include: [AppModule, UsersModule, AuthModule],
  });
  SwaggerModule.setup('api', app, doc, swaggerCustomOptions);

  await app.listen(process.env.APP_PORT || 3000);
  const welcomeLog = `Application is running on: ${await app.getUrl()}`;
  Logger.log(welcomeLog, 'NestApplication');
}
bootstrap();
