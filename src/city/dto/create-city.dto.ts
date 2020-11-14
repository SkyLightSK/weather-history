import {CreateWeatherDto} from "../../weather/dto/create-weather.dto";

export class CreateCityDto {
  name: string;
  weather?: CreateWeatherDto[];
}
