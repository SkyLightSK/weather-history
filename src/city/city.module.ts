import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {City} from "./city.entity";
import {WeatherFetcherModule} from "../weather-fetcher/weather-fetcher.module";

@Module({
  imports: [WeatherFetcherModule, TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
