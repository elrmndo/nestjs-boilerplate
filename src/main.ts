import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(compression());
  app.use(helmet());

  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get<string>('app.routePrefix'), {
    exclude: ['/'],
  });

  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(+configService.get<number>('app.port'));
}

void bootstrap();
