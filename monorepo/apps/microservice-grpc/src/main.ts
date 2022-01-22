import { NestFactory } from '@nestjs/core';
import { MicroserviceGrpcModule } from './microservice-grpc.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const microserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'monorepo_grpc',
      protoPath: join(__dirname, './microservice-grpc.proto'),
    },
  };
  const app = await NestFactory.createMicroservice(
    MicroserviceGrpcModule,
    microserviceOptions,
  );
  await app.listen();
}
bootstrap();
