import { Test, TestingModule } from '@nestjs/testing';
import { CopierService } from './copier.service';
import { SourcesService } from '../sources/sources.service';
import { DestinationService } from '../destination/destination.service';

// describe('CopierService', () => {
// let service: CopierService;
// let sourceService: SourcesService;
// let destinationService: DestinationService;

// beforeEach(async () => {
//   const mockSourceService = {
//     readChar: jest.fn(() => 'H') as any,
//   };
//   const mockDestinationService = {
//     writeChar: jest.fn() as any,
//   };

//   const module: TestingModule = await Test.createTestingModule({
//     providers: [
//       CopierService,
//       { provide: SourcesService, useValue: mockSourceService },
//       { provide: DestinationService, useValue: mockDestinationService },
//     ],
//   }).compile();

//   service = module.get<CopierService>(CopierService);
//   sourceService = module.get<SourcesService>(SourcesService);
//   destinationService = module.get<DestinationService>(DestinationService);

//   jest
//     .spyOn(sourceService, 'readChar')
//     .mockReturnValueOnce('H')
//     .mockReturnValueOnce('e')
//     .mockReturnValueOnce('l')
//     .mockReturnValueOnce('l')
//     .mockReturnValueOnce('o')
//     .mockReturnValueOnce('\n');
// });

// it('should copy characters until newline', () => {
//   service.copy();
//   expect(destinationService.writeChar).toHaveBeenCalledTimes(5);
//   expect(destinationService.writeChar).toHaveBeenCalledWith('H');
//   expect(destinationService.writeChar).toHaveBeenCalledWith('e');
//   expect(destinationService.writeChar).toHaveBeenCalledWith('l');
//   expect(destinationService.writeChar).toHaveBeenCalledWith('l');
//   expect(destinationService.writeChar).toHaveBeenCalledWith('o');
// });

describe('CopierService', () => {
  let service: CopierService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let sourceService: SourcesService;
  let destinationService: DestinationService; // Use the service type directly

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
