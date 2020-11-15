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

                        w.uv = weatherItem.forecastday[0].day.uv;
                        w.avgtemp_c = weatherItem.forecastday[0].day.avgtemp_c;
                        w.avgtemp_f = weatherItem.forecastday[0].day.avgtemp_f;
                        w.avgvis_km = weatherItem.forecastday[0].day.avgvis_km;
                        w.condition = weatherItem.forecastday[0].day.condition;
                        w.maxtemp_c = weatherItem.forecastday[0].day.maxtemp_c;
                        w.maxtemp_f = weatherItem.forecastday[0].day.maxtemp_f;
                        w.mintemp_c = weatherItem.forecastday[0].day.mintemp_c;
                        w.mintemp_f = weatherItem.forecastday[0].day.mintemp_f;
                        w.avghumidity = weatherItem.forecastday[0].day.avghumidity;
                        w.maxwind_kph = weatherItem.forecastday[0].day.maxwind_kph;
                        w.maxwind_mph = weatherItem.forecastday[0].day.maxwind_mph;
                        w.avgvis_miles = weatherItem.forecastday[0].day.avgvis_miles;
                        w.totalprecip_in = weatherItem.forecastday[0].day.totalprecip_in;
                        w.totalprecip_mm = weatherItem.forecastday[0].day.totalprecip_mm;

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