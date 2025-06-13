import { Injectable } from '@nestjs/common';
import { MailsKeysTypes, MailsPortKeyType } from './types/mails.types.js';
import { BaseConfig } from '../base/base.config.js';

@Injectable()
export class MailsConfig extends BaseConfig {
  async getMailsConfig(key: MailsKeysTypes): Promise<string> {
    return await this.getValueMailer(key);
  }

  async getMailsPort(key: MailsPortKeyType): Promise<number> {
    return await this.getValueMailsPort(key);
  }
}
