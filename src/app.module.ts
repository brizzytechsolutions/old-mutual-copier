import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationService } from './services/destination/destination.service';
import { SourcesService } from './services/sources/sources.service';
import { CopierService } from './services/copier/copier.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DestinationService, SourcesService, CopierService],
})
export class AppModule {}
