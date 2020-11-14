import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {City} from "./city.entity";
import {Repository} from "typeorm";
import {CityAvgDto} from "./dto/city-avg.dto";

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City) private readonly cityRepository: Repository<City>
    ) {}

    async findAll(): Promise<City[]> {
        return this.cityRepository.find();
    }

    async findOne(id: string | number, date: string) : Promise<City> {
        // Increment popularity
        const city = await this.cityRepository.findOneOrFail(id);
        await this.cityRepository.update(id, { views: city.views + 1 })

        switch(date) {
            case 'all': {
                return this.cityRepository.findOneOrFail(id, { relations: ['weather'] });
            }
            case 'today': {
                return await this.cityRepository
                    .createQueryBuilder("city")
                    .leftJoinAndSelect("city.weather", "weather")
                    .where("city.id = :city", { city: id })
                    .andWhere("CAST(weather.date AS VARCHAR) LIKE TO_CHAR(NOW(), 'YYYY-MM-DD') || '%' ")
                    .getOne()
            }
            case 'yesterday': {
                return await this.cityRepository
                    .createQueryBuilder("city")
                    .leftJoinAndSelect("city.weather", "weather")
                    .where("city.id = :city", { city: id })
                    .andWhere("CAST(weather.date AS VARCHAR) LIKE TO_CHAR(NOW() - INTERVAL '1 DAY', 'YYYY-MM-DD') || '%' ")
                    .getOne()
            }
            default: {
                return await this.cityRepository
                    .createQueryBuilder("city")
                    .leftJoinAndSelect("city.weather", "weather")
                    .where("city.id = :city", { city: id })
                    .andWhere("CAST(weather.date AS VARCHAR) LIKE :date", {date: `${date}%`})
                    .getOne()
            }
        }
    }

    async avgTemp(id: string | number) : Promise<CityAvgDto> {
        const city = await this.cityRepository.findOneOrFail(id, { relations: ['weather'] })
        const arr = [
                city.weather.map( weather => weather.day.avgtemp_c ),
                city.weather.map( weather => weather.day.avgtemp_f )
        ]
        const avg = (array) => array.reduce((a, b) => a + b) / array.length;

        const cityAvg: CityAvgDto = {
            id: city.id,
            name: city.name,
            region: city.region,
            country: city.country,
            lat: city.lat,
            lon: city.lon,
            tz_id: city.tz_id,
            avgtemp_c: Math.round(avg(arr[0]) * 10) / 10,
            avgtemp_f: Math.round(avg(arr[1]) * 10) / 10,
        };

        return cityAvg;
    }

    async popular() : Promise<City[]> {
        return await this.cityRepository.find({
            order: {
                views: "DESC"
            }
        })
    }
}
