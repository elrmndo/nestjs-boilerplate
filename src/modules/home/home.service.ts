import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService) {}

  message() {
    return {
      message: `Welcome to ${this.configService.get('app.name')}`,
    };
  }
}
