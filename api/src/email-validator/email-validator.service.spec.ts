import { Test, TestingModule } from '@nestjs/testing';
import { EmailValidatorService } from './email-validator.service';
import { EmailValidatorController } from './email-validator.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('EmailValidatorService', () => {
  let service: EmailValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailValidatorService],
      controllers: [EmailValidatorController],
      imports: [HttpModule, ConfigModule],
    }).compile();

    service = module.get<EmailValidatorService>(EmailValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
