import {Injectable} from '@nestjs/common';

const fs = { ...require("fs"), ...require("fs/promises") };

@Injectable()
export class WeatherFetcherService {
    static async getCitiesData(): Promise<any[]> {
        try {
            const data = JSON.parse(await fs.promises.readFile('src/weather-fetcher/data/data.json', 'utf8'))
            return data.map(city => JSON.parse(city).location)
                       .reduce((acc, cur) =>
                            !acc.find(item => item.name === cur.name) ? [...acc, cur] : acc, []);
        } catch(err) {
            console.error(err)
        }
    }

    static async getWeatherData(): Promise<any[]> {
        try {
            const data = JSON.parse(await fs.promises.readFile('src/weather-fetcher/data/data.json', 'utf8'))
            return data.map(city =>
                ({name: JSON.parse(city).location.name, forecastday: JSON.parse(city).forecast.forecastday}));
        } catch(err) {
            console.error(err)
        }
    }
}
