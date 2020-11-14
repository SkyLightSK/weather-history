import {Controller, Get, Param, Query} from '@nestjs/common';
import {CityService} from "./city.service";
import {CityDto} from "./dto/city.dto";
import {CityAvgDto} from "./dto/city-avg.dto";

@Controller('city')
export class CityController {
    constructor(
        private readonly cityService: CityService,
    ) {}

    @Get('popular')
    async popular(): Promise<CityDto[] | string> {
        try {
            return await this.cityService.popular();
        } catch (e) {
            console.error(e)
            return 'No data found';
        }
    }

    @Get()
    async findAll(): Promise<CityDto[] | string> {
        try {
            return await this.cityService.findAll()
        } catch (e) {
            console.error(e)
            return 'No data found';
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Query('date') date = 'all'): Promise<CityDto|string> {
        try {
            return await this.cityService.findOne(id, date)
        } catch (e) {
            console.error(e)
            return 'No data found';
        }
    }

    @Get(':id/avg')
    async avgTemp(@Param('id') id: string): Promise<CityAvgDto | string> {
        try {
            return await this.cityService.avgTemp(id);
        } catch (e) {
            console.error(e)
            return 'No data found';
        }
    }

}
