import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constants } from '../../common';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: Constants.JWT_SECRET_KEY
    }),
  ],
  controllers: [],
  providers: [
  ],
  exports: [
    PassportModule
  ]
})
export class SharedModule { }
