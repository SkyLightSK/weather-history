import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { WeatherModule } from './weather/weather.module';
import { DatabaseModule } from './database/database.module';
// import { WeatherFetcherModule } from './weather-fetcher/weather-fetcher.module';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    // WeatherFetcherModule,
    DatabaseModule,
    CityModule,
    WeatherModule,
  ],
})
export class AppModule {}
