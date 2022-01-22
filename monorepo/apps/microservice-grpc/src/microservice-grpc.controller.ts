import { Controller } from '@nestjs/common';
import { MicroserviceGrpcService } from './microservice-grpc.service';
import { GrpcMethod } from '@nestjs/microservices';

interface Rooster {
  message: string;
}

@Controller()
export class MicroserviceGrpcController {
  constructor(
    private readonly microserviceGrpcService: MicroserviceGrpcService,
  ) {}

  @GrpcMethod('MicroserviceGrpcController', 'GetRooster')
  getRooster(): Rooster {
    return { message: this.microserviceGrpcService.getRooster() };
  }
}
