import {MigrationInterface, QueryRunner} from "typeorm";

export class CityAndWeather1605251911881 implements MigrationInterface {
    name = 'CityAndWeather1605251911881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weather" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "cityId" integer, CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "weather" ADD CONSTRAINT "FK_c69617521366df6993ef327f0ad" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" DROP CONSTRAINT "FK_c69617521366df6993ef327f0ad"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "weather"`);
    }

}
