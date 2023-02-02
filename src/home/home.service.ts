import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  message() {
    return { message: 'Hello World!' };
  }
}
