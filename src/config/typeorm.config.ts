import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class TypeOrmConfig {
    static getTypeOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            schema: configService.get('DB_SCHEMA'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../migration/*.ts'],
            synchronize: configService.get('TYPE_ORM_SYNCHRONIZE').toString() === 'true' ? true : false,
            logging: configService.get('TYPE_ORM_LOGGING').toString() === 'true' ? true : false,
            migrationsRun: true,
        };
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getTypeOrmConfig(configService),
    inject: [ConfigService]
};
