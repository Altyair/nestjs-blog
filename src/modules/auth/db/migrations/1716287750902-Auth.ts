import { MigrationInterface, QueryRunner } from "typeorm";

export class Auth1716287750902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('Auth up');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
