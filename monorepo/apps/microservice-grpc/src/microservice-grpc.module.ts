import { Module } from '@nestjs/common';
import { MicroserviceGrpcController } from './microservice-grpc.controller';
import { MicroserviceGrpcService } from './microservice-grpc.service';

@Module({
  imports: [],
  controllers: [MicroserviceGrpcController],
  providers: [MicroserviceGrpcService],
})
export class MicroserviceGrpcModule {}
