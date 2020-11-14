import { Module } from '@nestjs/common';
import {WeatherFetcherModule} from "../weather-fetcher/weather-fetcher.module";

@Module({
    imports: [WeatherFetcherModule]
})
export class DatabaseModule {}
