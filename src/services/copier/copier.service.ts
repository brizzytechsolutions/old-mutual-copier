import { Injectable } from '@nestjs/common';
import { SourcesService } from '../sources/sources.service';
import { DestinationService } from '../destination/destination.service';

@Injectable()
export class CopierService {
  constructor(
    private sourceService: SourcesService,
    private destinationService: DestinationService,
  ) {}

  copy(): void {
    let char;
    while ((char = this.sourceService.readChar()) !== '\n') {
      this.destinationService.writeChar(char);
    }
  }
}
