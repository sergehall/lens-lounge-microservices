import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseConfig } from '../base/base.config.js';
import { JwtKeysType } from './types/jwt-keys.types.js';

@Injectable()
export class JwtConfig extends BaseConfig {
  private config: Record<string, string> = {
    ACCESS_SECRET_KEY: 'ACCESS_SECRET_KEY',
    REFRESH_SECRET_KEY: 'REFRESH_SECRET_KEY',
    EXP_ACC_TIME: 'EXP_ACC_TIME',
    EXP_REF_TIME: 'EXP_REF_TIME',
  };

  private getJwtValue(key: JwtKeysType): string {
    if (Object.prototype.hasOwnProperty.call(this.config, key)) {
      return this.getValueJwtByKey(key);
    } else {
      throw new BadRequestException(`Key ${key} not found in JWT configuration`);
    }
  }

  getJwtConfigValue(key: JwtKeysType): string {
    return this.getJwtValue(key);
  }
}
