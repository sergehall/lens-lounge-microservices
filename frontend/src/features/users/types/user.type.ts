export interface User {
  userId: string;
  username: string;
  avatarUrl: string;
  email: string;
  isOnline: boolean;
  lastActive: string;
  firstName: string;
  lastName: string;
  login: string;
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
