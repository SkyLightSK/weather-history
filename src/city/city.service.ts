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
        return await this.cityRepository
            .createQueryBuilder("city")
            .select("round(AVG(weather.avgtemp_c), 2)", "city_avgtemp_celsius")
            .addSelect("round(AVG(weather.avgtemp_f), 2)", "city_avgtemp_fahrenheit")
            .leftJoin("city.weather", "weather")
            .where("city.id = :city", { city: id })
            .getRawOne()
    }

    async popular() : Promise<City[]> {
        return await this.cityRepository.find({
            order: {
                views: "DESC"
            }
        })
    }
}
