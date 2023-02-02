import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  shortName: process.env.APP_SHORT_NAME,
  port: parseInt(process.env.PORT, 10),
  routePrefix: process.env.APP_ROUTE_PREFIX,
  isProduction: process.env.NODE_ENV === 'production',
}));
