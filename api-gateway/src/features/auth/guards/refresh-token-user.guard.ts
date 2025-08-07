import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Request } from 'express';
import { UsersEntity } from '../../users/entities/users.entity';
import { UsersRepo } from '../../users/infrastructure/users-repo';
import { ValidRefreshJwtCommand } from '../application/use-cases/valid-refresh-jwt.use-case';
import { PayloadDto } from '../dto/payload.dto';
import { InvalidJwtRepo } from '../infrastructure/invalid-jwt-repo';
import { jwtCookiesIncorrect } from '../../../common/filters/custom-errors-messages';
import { extractRefreshToken } from "./utils/extract-refresh-token";

@Injectable()
export class RefreshTokenUserGuard implements CanActivate {
  constructor(
    private readonly invalidJwtRepo: InvalidJwtRepo,
    private readonly commandBus: CommandBus,
    private readonly usersRepo: UsersRepo,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request & { user?: any }>();

    const token = extractRefreshToken(req);

    const isBlacklisted = await this.invalidJwtRepo.jwtExistInBlackList(token);
    if (isBlacklisted) {
      this.unauthorized();
    }
    const payload: PayloadDto | null = await this.commandBus.execute(
      new ValidRefreshJwtCommand(token),
    );
    if (!payload) {
      this.unauthorized();
    }
    const user: UsersEntity | null =
      await this.usersRepo.findNotBannedUserById(payload.userId);
    console.log("user", user)
    if (!user) {
      this.unauthorized();
    }

    req.user = {
      userId: user.userId,
      photoUrl: user.photoUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      email: user.email,
      birthday: user.birthday,
      education: user.education,
      website: user.website,
    };

    return true;
  }

  private unauthorized(): never {
    throw new HttpException(
      { message: [jwtCookiesIncorrect] },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
