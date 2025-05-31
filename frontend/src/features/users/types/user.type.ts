export interface User {
  userId: string;
  avatarUrl: string;
  email: string;
  login: string;
  isOnline: boolean;
  lastActive: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  createdAt: string;
  orgId: string;
  roles: string[];
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
  confirmationCode: string;
  expirationDate: string;
  isConfirmed: boolean;
  birthday: string;
  education: string;
  website: string;
  photoUrl: string;
}
