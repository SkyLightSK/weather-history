import { Test, TestingModule } from '@nestjs/testing';
import { WeatherFetcherService } from './weather-fetcher.service';

describe('WeatherFetcherService', () => {
  let service: WeatherFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherFetcherService],
    }).compile();

    service = module.get<WeatherFetcherService>(WeatherFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
