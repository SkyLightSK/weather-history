import {MigrationInterface, QueryRunner} from "typeorm";

export class DayNormalize1605429022539 implements MigrationInterface {
    name = 'DayNormalize1605429022539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "uv"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgtemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgtemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgvis_km"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "condition"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxtemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxtemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "mintemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "mintemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avghumidity"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxwind_kph"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxwind_mph"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgvis_miles"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "totalprecip_in"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "totalprecip_mm"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "day"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "day" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "uv" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgtemp_c" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgtemp_f" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgvis_km" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "condition" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxtemp_c" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxtemp_f" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "mintemp_c" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "mintemp_f" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avghumidity" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxwind_kph" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxwind_mph" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgvis_miles" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "totalprecip_in" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "totalprecip_mm" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "totalprecip_mm"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "totalprecip_in"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgvis_miles"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxwind_mph"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxwind_kph"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avghumidity"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "mintemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "mintemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxtemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "maxtemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "condition"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgvis_km"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgtemp_f"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "avgtemp_c"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "uv"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "day"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "day" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "totalprecip_mm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "totalprecip_in" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgvis_miles" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxwind_mph" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxwind_kph" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avghumidity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "mintemp_f" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "mintemp_c" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxtemp_f" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "maxtemp_c" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "condition" jsonb`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgvis_km" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgtemp_f" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "avgtemp_c" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "uv" integer NOT NULL`);
    }

}
