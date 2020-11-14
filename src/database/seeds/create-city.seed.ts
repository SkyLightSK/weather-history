import { Factory, Seeder } from "typeorm-seeding"
import {City} from "../../city/city.entity";
import {WeatherFetcherService} from "../../weather-fetcher/weather-fetcher.service";


export class CreateCity implements Seeder {

    public async run(factory: Factory): Promise<void> {
        const cities = await WeatherFetcherService.getCitiesData()
        for( const city of cities ){
            await factory(City)()
                    .map(async c => {
                        c.name = city.name
                        c.region = city.region
                        c.country = city.country
                        c.lat = city.lat
                        c.lon = city.lon
                        c.tz_id = city.tz_id
                        return c
                    })
                    .create()
        }

    }
}