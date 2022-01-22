import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceGrpcService {
  getRooster(): string {
    return "Hello World, I'm a rooster 🐔 !";
  }
}
