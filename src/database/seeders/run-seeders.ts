import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeders.module';

const runSeeders = async () => {
  const app = await NestFactory.create(SeederModule);

  console.log(`Running seeders... Please wait...`);

  setTimeout(() => console.log(`Done running seeders...`), 1500);

  await app.close();
};

void runSeeders();
