import { Injectable } from '@nestjs/common';
import { SourcesService } from '../sources/sources.service';
import { DestinationService } from '../destination/destination.service';

@Injectable()
export class CopierService {
  //   constructor(
  //     private sourceService: SourcesService,
  //     private destinationService: DestinationService,
  //   ) {}

  //   copy(): void {
  //     let char;
  //     while ((char = this.sourceService.readChar()) !== '\n') {
  //       this.destinationService.writeChar(char);
  //     }
  //   }

  constructor(
    private sourceService: SourcesService,
    private destinationService: DestinationService,
  ) {}

  copyMultiple() {
    const buffer = this.sourceService.readChars(5);
    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i] === '\n') {
        this.destinationService.writeChars(buffer.substring(0, i));
        break;
      }
    }
    this.destinationService.writeChars(buffer.replace('\n', ''));
  }
}
