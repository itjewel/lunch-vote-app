import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials like cookies, authorization headers
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Lunch Voting API') // Title of the API
    .setDescription('API for managing lunch orders') // Description
    .setVersion('1.0') // API Version
    .addTag('lunch') // Optional tags for organization
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI endpoint

  await app.listen(3000);
}
bootstrap();

