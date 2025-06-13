import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseConfig } from '../base/base.config.js';
import { ReCaptchaKeyType } from './types/re-captcha-key.type.js';

@Injectable()
export class ReCaptchaConfig extends BaseConfig {
  private config: Record<string, string> = {
    RECAPTCHA_SITE_KEY: 'RECAPTCHA_SITE_KEY',
    RECAPTCHA_SECRET_KEY: 'RECAPTCHA_SECRET_KEY',
  };

  async getReCaptchaValueByKey(key: ReCaptchaKeyType): Promise<string> {
    if (Object.prototype.hasOwnProperty.call(this.config, key)) {
      return this.getValueReCaptcha(key);
    } else {
      throw new BadRequestException(
        `Key ${key} not found in PayPal configuration`,
      );
    }
  }
  async getReCaptchaValue(key: ReCaptchaKeyType): Promise<string> {
    return this.getReCaptchaValueByKey(key);
  }
}
