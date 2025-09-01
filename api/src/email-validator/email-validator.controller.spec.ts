import { Test, TestingModule } from '@nestjs/testing';
import { EmailValidatorController } from './email-validator.controller';
import { EmailValidatorService } from './email-validator.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('EmailValidatorController', () => {
  let controller: EmailValidatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailValidatorController],
      providers: [EmailValidatorService],
      imports: [HttpModule, ConfigModule],
    }).compile();

    controller = module.get<EmailValidatorController>(EmailValidatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
