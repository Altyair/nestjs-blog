import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 6703,
    username: 'root',
    password: '123',
    database: 'blog',
    synchronize: false,
    bigNumberStrings: true,
    multipleStatements: true,
    logging: true,
    entities: ['**/*.entity{ .ts,.js}'],
    migrations: ['dist/db/modules/**/db/migrations/*{.ts,.js}'],
    migrationsRun: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
