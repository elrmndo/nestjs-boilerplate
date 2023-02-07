import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const AppConfigSchema = z
  .object({
    name: z.string(),
    shortName: z.string(),
    port: z.number(),
    routePrefix: z.string(),
    isProduction: z.boolean(),
  })
  .required();

type AppConfig = z.infer<typeof AppConfigSchema>;

export default registerAs('app', (): AppConfig => {
  const appConfig: AppConfig = {
    name: process.env.APP_NAME,
    shortName: process.env.APP_SHORT_NAME,
    port: parseInt(process.env.PORT, 10),
    routePrefix: process.env.APP_ROUTE_PREFIX,
    isProduction: process.env.NODE_ENV === 'production',
  };

  return AppConfigSchema.parse(appConfig);
});
