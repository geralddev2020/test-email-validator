import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailValidatorModule } from './email-validator/email-validator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmailValidatorModule,
  ],
})
export class AppModule {}
