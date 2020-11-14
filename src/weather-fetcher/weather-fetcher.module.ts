import { Module } from '@nestjs/common';
import { WeatherFetcherService } from './weather-fetcher.service';

@Module({
  providers: [WeatherFetcherService],
  exports: [WeatherFetcherService],
})
export class WeatherFetcherModule {}
