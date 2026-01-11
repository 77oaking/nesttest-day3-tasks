import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Azman! Welcome to SoftlabIT';
  }
}
