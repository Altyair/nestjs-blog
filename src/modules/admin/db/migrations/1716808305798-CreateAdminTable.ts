import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdminTable1716808305798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE admin (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, login VARCHAR(255) NOT NULL, passwordHash VARCHAR(255) NOT NULL,nickName VARCHAR(255) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
