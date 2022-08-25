import config from 'config';
import { DataSourceOptions } from 'typeorm';

const dbConfig = config.get<any>('parameters.databases.stack-hosting');
const typeOrmConfig: DataSourceOptions = {
    host: dbConfig.host,
    port: 3306,
    database: dbConfig.name,
    username: dbConfig.user,
    password: dbConfig.password,
    type: dbConfig.type,
    migrations: ['src/Infrastructure/TypeOrm/Migration/*.ts'],
};

// export = typeOrmConfig;
export default typeOrmConfig;
