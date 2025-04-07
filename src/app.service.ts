import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  healthCheck(): { status: string, message: string } {
    return { status: '200', message: 'OK' };
  }
}
