import { SetMetadata } from '@nestjs/common';
import { UserRolesEnums } from '../enums/user-roles.enums.js';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRolesEnums[]) => SetMetadata(ROLES_KEY, roles);
