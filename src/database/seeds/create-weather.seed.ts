import { Factory, Seeder } from "typeorm-seeding"
import {Weather} from "../../weather/weather.entity";
import { Connection } from 'typeorm'
import {City} from "../../city/city.entity";
import {WeatherFetcherService} from "../../weather-fetcher/weather-fetcher.service";

export class CreateWeather implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const weather = await WeatherFetcherService.getWeatherData();
        for( const weatherItem of weather ){
            await factory(Weather)()
                    .map(async w => {
                        w.date = weatherItem.forecastday[0].date;
                        w.day = weatherItem.forecastday[0].day;
                        w.astro = weatherItem.forecastday[0].astro;
                        w.hour = weatherItem.forecastday[0].hour;
                        w.city = await connection
                            .createQueryBuilder()
                            .select("city")
                            .from(City, "city")
                            .where("city.name = :name", { name: weatherItem.name })
                            .getOne();
                        return w
                    })
                    .create()
        }
    }
}