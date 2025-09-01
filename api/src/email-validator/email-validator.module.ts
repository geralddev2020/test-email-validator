import { Module } from '@nestjs/common';
import { EmailValidatorService } from './email-validator.service';
import { HttpModule } from '@nestjs/axios';
import { EmailValidatorController } from './email-validator.controller';

@Module({
  imports: [HttpModule],
  providers: [EmailValidatorService],
  controllers: [EmailValidatorController],
})
export class EmailValidatorModule {}
