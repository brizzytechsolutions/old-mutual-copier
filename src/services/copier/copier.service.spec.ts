import { Test, TestingModule } from '@nestjs/testing';
import { CopierService } from './copier.service';
import { SourcesService } from '../sources/sources.service';
import { DestinationService } from '../destination/destination.service';

describe('CopierService', () => {
  let service: CopierService;
  let sourceService: SourcesService;
  let destinationService: DestinationService;

  beforeEach(async () => {
    const mockSourceService = {
      readChar: jest.fn(() => 'H') as any,
    };
    const mockDestinationService = {
      writeChar: jest.fn() as any,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CopierService,
        { provide: SourcesService, useValue: mockSourceService },
        { provide: DestinationService, useValue: mockDestinationService },
      ],
    }).compile();

    service = module.get<CopierService>(CopierService);
    sourceService = module.get<SourcesService>(SourcesService);
    destinationService = module.get<DestinationService>(DestinationService);

    jest
      .spyOn(sourceService, 'readChar')
      .mockReturnValueOnce('T')
      .mockReturnValueOnce('e')
      .mockReturnValueOnce('s')
      .mockReturnValueOnce('t')
      .mockReturnValueOnce('s')
      .mockReturnValueOnce('\n');
  });

  it('should copy characters until newline', () => {
    service.copy();
    expect(destinationService.writeChar).toHaveBeenCalledTimes(5);
    expect(destinationService.writeChar).toHaveBeenCalledWith('T');
    expect(destinationService.writeChar).toHaveBeenCalledWith('e');
    expect(destinationService.writeChar).toHaveBeenCalledWith('s');
    expect(destinationService.writeChar).toHaveBeenCalledWith('t');
    expect(destinationService.writeChar).toHaveBeenCalledWith('s');
  });
});
