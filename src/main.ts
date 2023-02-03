import { ClassSerializerInterceptor, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(compression());
  app.use(helmet());

  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get<string>('app.routePrefix'), {
    exclude: ['/'],
  });

  app.enableVersioning({ type: VersioningType.URI });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(configService.get<number>('app.port'));
}

// eslint-disable-next-line no-void
void bootstrap();
