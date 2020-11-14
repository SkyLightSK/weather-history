// import * as Faker from "faker"
import { define } from "typeorm-seeding"
import {City} from "../../city/city.entity";

define(City, (
    // faker: typeof Faker
) => {
    const city = new City()
    // city.id = faker.random.uuid();
    // city.name = faker.address.city();
    return city
})