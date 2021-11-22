import { Constants } from './common/constants';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
import * as path from 'path';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exception-filter';
import { AuditLoggerMiddleware } from './middleware';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true
      },
    }),
    ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync(typeOrmConfigAsync)
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditLoggerMiddleware)
      .forRoutes({ path: '**', method: RequestMethod.ALL });
    consumer
      .apply()
      .exclude(
        // We access path with 0 index as we added paths as array in const file
      )
      .forRoutes({ path: '**', method: RequestMethod.ALL });
  }

}
