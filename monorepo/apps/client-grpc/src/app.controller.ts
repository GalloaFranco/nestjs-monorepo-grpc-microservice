import {Controller, Get, OnModuleInit} from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';

interface GrpcRooster {
  getRooster({}): Observable<any>;
}

@Controller()
export class AppController implements OnModuleInit{
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'monorepo_grpc',
      protoPath: join(__dirname, './microservice-grpc.proto'),
    },
  })
  private client: ClientGrpc;

  private grpcRooster: GrpcRooster;

  onModuleInit() {
    this.grpcRooster = this.client.getService<GrpcRooster>('MicroserviceGrpcController');
  }

  @Get('rooster')
  getRooster(): Observable<any> {
    return this.grpcRooster.getRooster({});
  }
}
