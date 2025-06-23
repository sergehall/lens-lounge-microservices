import { usersMock } from '../../../users/mocks/usersMock';

export interface ProfileType {
  userId: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  birthday: string;
  education: string;
  website: string;
}

// Find user with userId === "0"
const defaultUser = usersMock.find((user) => user.userId === '0');

if (!defaultUser) {
  throw new Error("Default user with userId '0' not found in users array.");
}

// Generate the default profile from that user
export const DEFAULT_PROFILE: ProfileType = {
  birthday: defaultUser.birthday,
  education: defaultUser.education,
  email: defaultUser.email,
  firstName: defaultUser.firstName,
  lastName: defaultUser.lastName,
  login: defaultUser.login,
  photoUrl: defaultUser.photoUrl,
  userId: defaultUser.userId,
  website: defaultUser.website,
};
