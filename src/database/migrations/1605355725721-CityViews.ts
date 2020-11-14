import {MigrationInterface, QueryRunner} from "typeorm";

export class CityViews1605355725721 implements MigrationInterface {
    name = 'CityViews1605355725721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" ADD "views" integer NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "views"`);
    }

}
