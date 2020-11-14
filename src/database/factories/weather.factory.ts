// import * as Faker from "faker"
import { define } from "typeorm-seeding"
import {Weather} from "../../weather/weather.entity";

define(Weather, (
    // faker: typeof Faker
) => {
    const weather = new Weather()
    // weather.id = faker.random.uuid();
    // weather.date = faker.date.past();
    return weather
})