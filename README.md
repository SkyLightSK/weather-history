# Weather History App

## ❯ Table of contents

- [Introduction](#-introduction)
- [Installation](#-installation)
- [Create your .ENV file](#-create-your-env-file)
- [DB configuration](#-db-configuration)
- [Fixtures](#-fixtures)
- [Script for fetching weather](#-script-for-fetching-weather)
- [Running the app](#-running-the-app)
- [API routs](#-api-routs)

## ❯ Introduction

This app manages weather history and can fetch it.

## ❯ Installation

`npm install`

## ❯ Create your .ENV file

Copy the `.env.examle` and rename it to `.env`. In this file collects all the global configurations.

## ❯ DB configuration

This example requires local PostgresSQL installation.  If using a local PostgresSQL database, see `ormconfig.ts` for credentials, and make sure there are matching credentials in the database and the source code.

Create a database with preferred the name. Then run `npm run db:setup`. This will migrate the database and seed some data into it.

```bash
# npm run schema:drop && npm run typeorm:run && npm run seed:run
$ npm run db:setup
```

### Migrations
Here basic command to manage migrations:
```bash
# To generate migration based on latest changes
$ npm run typeorm:migrate N # "N" - migration name 

# Generate custom migrations
$ npm run typeorm:create N # "N" - migration name

# Run migrations
$ npm run typeorm:run
```

## ❯ Fixtures

The fixtures can be called by the configured cli command `npm run seed:run`. 
With pre-fetched data it generates 51 USD cities with a ~350 weather items .

The seed files for the database population use the data provided by the `weather-fetcher.service` .



## ❯ Script for fetching weather
To run script: 

```bash
$ npm run weather:fetch
```

The script `src/weather-fetcher/weather-fetcher.script.ts` will take a list of cities from the city file
`src/weather-fetcher/data/cities.json`
and try to get the weather for the last 7 days for each city.

Collecting weather for all cities may take some time.
(You can increase or decrease the number of cities if you wish. `citiesAll.json`)

After receiving the data, the script writes and saves it to a file:
`src/weather-fetcher/data/data.json`

## ❯ Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## ❯ API routs
- To list of available cities:

    `GET /city`

- To get information about weather conditions in the city N for today, yesterday and
a certain date (depending on the passed parameters in request)

    `GET /city?date={ today | yesterday | YYYY-MM-DD }`

- To get average temperature in the city N:

    `GET /city/:id/avg`
    
- To list city which requested the most:

    `GET /city/popular`


