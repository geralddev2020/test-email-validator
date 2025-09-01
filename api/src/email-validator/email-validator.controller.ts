import {
  Body,
  Controller,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ValidateEmailDto } from './dto/email.dto';
import { EmailValidatorService } from './email-validator.service';

@Controller('email-validator')
export class EmailValidatorController {
  constructor(private readonly emailValidatorService: EmailValidatorService) {}

  @Post()
  @HttpCode(200)
  EmailVerify(@Body(ValidationPipe) input: ValidateEmailDto) {
    return this.emailValidatorService.emailValidate(input);
  }
}
