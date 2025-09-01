import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ValidateEmailDto } from './dto/email.dto';
import { UserCheckSucess } from './entity/usercheck.entity';

@Injectable()
export class EmailValidatorService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async emailValidate(input: ValidateEmailDto): Promise<UserCheckSucess> {
    const URL = this.configService.get<string>('EMAIL_VALIDATOR');
    const AUTHORIZATION = this.configService.get<string>(
      'EMAIL_VALIDATOR_TOKEN',
    );

    const { data } = await firstValueFrom(
      this.httpService
        .get<UserCheckSucess>(`${URL}${input.email}`, {
          headers: {
            Authorization: `Bearer ${AUTHORIZATION}`,
          },
        })
        .pipe(
          catchError((err: AxiosError) => {
            if (err.status === 400 && err.response && err.response.data) {
              throw new HttpException(err.response.data, 400);
            }
            throw new HttpException('An error happened!', 400);
          }),
        ),
    );

    return data;
  }
}
