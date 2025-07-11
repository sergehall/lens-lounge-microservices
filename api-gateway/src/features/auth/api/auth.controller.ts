import { Body, Controller, Get, HttpCode, HttpStatus, Ip, Post, Query, Request, Res, UseGuards, } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { Response } from 'express';
import { ApiDocService } from '../../../api-documentation/api-doc-service';
import { AuthMethods } from '../../../api-documentation/enums/auth-methods.enum';
import { EndpointKeys } from '../../../api-documentation/enums/endpoint-keys.enum';
import { ParseQueriesService } from '../../../common/query/parse-queries.service';
import {
  UpdateSentConfirmationCodeCommand
} from '../../users/application/use-cases/update-sent-confirmation-code.use-case';
import { CurrentUserDto } from '../../users/dto/current-user.dto';
import {
  ChangePasswordByRecoveryCodeCommand
} from '../application/use-cases/change-password-by-recovery-code.use-case';
import { ConfirmUserByCodeCommand } from '../application/use-cases/confirm-user-by-code.use-case';
import { LoginCommand } from '../application/use-cases/login.use-case';
import { LogoutCommand } from '../application/use-cases/logout.use-case';
import { PasswordRecoveryCommand } from '../application/use-cases/password-recovery.use-case';
import { RefreshJwtCommand } from '../application/use-cases/refresh-jwt.use-case';
import { RegistrationUserCommand } from '../application/use-cases/registration-user.use-case';
import { AccessTokenDto } from '../dto/access-token.dto';
import { CodeDto } from '../dto/code.dto';
import { EmailDto } from '../dto/email.dto';
import { LoginDto } from '../dto/login.dto';
import { NewPasswordRecoveryDto } from '../dto/new-password-recovery.dto';
import { UserIdEmailLoginDto } from '../dto/profile.dto';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { CookiesJwtVerificationGuard } from '../guards/cookies-jwt.verification.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { RefreshTokenUserGuard } from "../guards/refresh-token-user.guard";

@SkipThrottle()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    protected commandBus: CommandBus,
    protected parseQueriesService: ParseQueriesService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string,
  ): Promise<AccessTokenDto> {
    const currentUserDto: CurrentUserDto = req.user;

    const userAgent: string = req.get('user-agent') || 'not found user-agent';

    return await this.commandBus.execute(
      new LoginCommand(currentUserDto, ip, userAgent, res),
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('registration')
  async registration(@Body() loginDto: LoginDto): Promise<UserIdEmailLoginDto> {
    return await this.commandBus.execute(new RegistrationUserCommand(loginDto));
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('registration-email-resending')
  async registrationEmailResending(@Body() emailDto: EmailDto) {
    return await this.commandBus.execute(
      new UpdateSentConfirmationCodeCommand(emailDto.email),
    );
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(CookiesJwtVerificationGuard)
  @Post('refresh-token')
  async refreshToken(
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string,
  ): Promise<AccessTokenDto> {
    const refreshTokenDto = req.cookies.refreshToken;

    const userAgent = req.get('user-agent');

    return await this.commandBus.execute(
      new RefreshJwtCommand(refreshTokenDto, ip, userAgent, res),
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('registration-confirmation')
  async registrationConfirmation(@Body() codeDto: CodeDto): Promise<boolean> {
    const { code } = codeDto;
    return await this.commandBus.execute(new ConfirmUserByCodeCommand(code));
  }

  @SkipThrottle()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(CookiesJwtVerificationGuard)
  @Post('logout')
  async logout(
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
  ): Promise<boolean> {
    const refreshTokenDto: RefreshTokenDto = req.cookies.refreshToken;
    const { refreshToken } = refreshTokenDto;

    await this.commandBus.execute(new LogoutCommand(refreshToken));

    res.clearCookie('refreshToken');
    return true;
  }

  @SkipThrottle()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('confirm-registration')
  async confirmRegistrationByCodeFromQuery(
    @Query() query: any,
  ): Promise<boolean> {
    const queryData = await this.parseQueriesService.getQueriesData(query);

    return await this.commandBus.execute(
      new ConfirmUserByCodeCommand(queryData.code),
    );
  }

  @SkipThrottle()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('password-recovery')
  async passwordRecovery(@Body() emailDto: EmailDto): Promise<boolean> {
    const { email } = emailDto;

    return await this.commandBus.execute(new PasswordRecoveryCommand(email));
  }

  @SkipThrottle()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('new-password')
  async newPassword(
    @Body() newPasswordRecoveryDto: NewPasswordRecoveryDto,
  ): Promise<boolean> {
    return await this.commandBus.execute(
      new ChangePasswordByRecoveryCodeCommand(newPasswordRecoveryDto),
    );
  }

  @SkipThrottle()
  @ApiDocService.apply(EndpointKeys.Auth, AuthMethods.Me)
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req: any): Promise<UserIdEmailLoginDto> {
    const { userId, email, login } = req.user;
    return {
      email: email,
      login: login,
      userId: userId,
    };
  }

  @SkipThrottle()
  @ApiDocService.apply(EndpointKeys.Auth, AuthMethods.Me)
  @UseGuards(RefreshTokenUserGuard)
  @Get('profile')
  async getUserForFrontend(@Request() req: any): Promise<any> {
    return req.user
  }
}
