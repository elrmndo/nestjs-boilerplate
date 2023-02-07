import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const DatabaseConfigSchema = z
  .object({
    type: z.string(),
    host: z.string(),
    port: z.number(),
    username: z.string(),
    password: z.string(),
    name: z.string(),
    sync: z.boolean(),
    maxConnections: z.number(),
  })
  .required();

type DatabaseConfig = z.infer<typeof DatabaseConfigSchema>;

export default registerAs('database', (): DatabaseConfig => {
  const databaseConfig: DatabaseConfig = {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    sync: process.env.DATABASE_SYNCHRONIZE === 'true',
    maxConnections: parseInt(process.env.DATABASE_MAX_CONNECTIONS, 10),
  };

  return DatabaseConfigSchema.parse(databaseConfig);
});
