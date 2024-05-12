import { Injectable } from '@nestjs/common';

@Injectable()
export class SourcesService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readChars(count: number): string {
    throw new Error('Method not implemented.');
  }
}
