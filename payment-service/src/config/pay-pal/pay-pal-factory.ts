import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EnvNamesEnums } from '../enums/env-names.enums.js';
import { PayPalUrlsEnum } from './enums/payPalUrls.enum.js';

@Injectable()
export class PayPalFactory {
  constructor() {}

  private getPayPalUrl(envNames: EnvNamesEnums): string {
    switch (envNames) {
      case 'test':
      case 'development':
      case 'staging':
      case 'sandbox':
        return PayPalUrlsEnum.BaseSandboxApi;
      case 'production':
      case 'live':
        return PayPalUrlsEnum.BaseApi;
      default:
        throw new InternalServerErrorException('Invalid API environment');
    }
  }
}
