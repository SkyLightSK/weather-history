import {MigrationInterface, QueryRunner} from "typeorm";

export class CityAndWeatherUpdate1605275200559 implements MigrationInterface {
    name = 'CityAndWeatherUpdate1605275200559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" ADD "day" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "astro" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "hour" jsonb`);
        await queryRunner.query(`ALTER TABLE "city" ADD "region" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD "country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD "lat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD "lon" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD "tz_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "tz_id"`);
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "lon"`);
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "lat"`);
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "region"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "astro"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "day"`);
    }

}
