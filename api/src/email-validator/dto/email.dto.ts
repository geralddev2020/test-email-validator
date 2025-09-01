import { IsEmail, IsString } from 'class-validator';

export class ValidateEmailDto {
  @IsString()
  @IsEmail()
  email: string;
}
