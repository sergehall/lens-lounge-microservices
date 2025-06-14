import { IsBoolean, IsNotEmpty, Length } from 'class-validator';
import { UserRolesEnum } from '../../enums/users/userRoles.enum.js';

export class GuestUsersDto {
  @IsNotEmpty()
  @Length(0, 60, {
    message: 'Incorrect guestUserId length! Must be max 50 ch.',
  })
  guestUserId!: string;
  @IsNotEmpty()
  roles!: UserRolesEnum[];
  @IsNotEmpty()
  @IsBoolean()
  isBanned!: boolean;
}
