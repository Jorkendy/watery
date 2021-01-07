import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors();

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

  const options = new DocumentBuilder()
    .setTitle("Watery shop")
    .setDescription("The watery API")
    .setVersion("1.0")
    .addTag("test")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}

bootstrap();
