import {MigrationInterface, QueryRunner} from "typeorm";

export class Timestamps1605336321379 implements MigrationInterface {
    name = 'Timestamps1605336321379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "city" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "city" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "createdAt"`);
    }

}
