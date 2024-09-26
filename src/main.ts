import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Library System')
    .setDescription('Library System API Documentation')
    .setVersion('1.0')
    .setContact('Support', 'https://yourwebsite.com', 'support@yourwebsite.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
