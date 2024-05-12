import { Test, TestingModule } from '@nestjs/testing';
import { CopierService } from './copier.service';
import { SourcesService } from '../sources/sources.service';
import { DestinationService } from '../destination/destination.service';

describe('CopierService', () => {
  let service: CopierService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let sourceService: SourcesService;
  let destinationService: DestinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CopierService,
        {
          provide: SourcesService,
          useValue: {
            readChars: jest.fn().mockReturnValue('Kabelo\nExtraData'),
          },
        },
        {
          provide: DestinationService,
          useValue: { writeChars: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<CopierService>(CopierService);
    sourceService = module.get<SourcesService>(SourcesService);
    destinationService = module.get<DestinationService>(DestinationService);
  });

  it('should copy characters until newline using readChars', () => {
    service.copyMultiple();
    expect(destinationService.writeChars).toHaveBeenCalledWith('Kabelo');
  });
});
