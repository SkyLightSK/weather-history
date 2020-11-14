import {CreateCityDto} from "../../city/dto/create-city.dto";

export class CreateWeatherDto {
  date: string;
  city: CreateCityDto;
}
