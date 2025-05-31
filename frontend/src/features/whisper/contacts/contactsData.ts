import {
  AddressData,
  addressDataMock,
  CellPhoneData,
  cellPhoneDataMock,
  usersMock,
} from '../../users/mocks/usersMock';

export interface ContactsData {
  id: string;
  userId: string;
  avatar: string;
  login: string;
  firstName: string;
  lastName: string;
  phoneNumber: CellPhoneData;
  addresses: AddressData;
  email: string;
  about: string;
  isFavorite: boolean;
  isBlocked: boolean;
  isPinned: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  isOnline: boolean;
}

export const combineContactData = (): ContactsData[] => {
  return usersMock.map((user) => {
    const phoneNumber = cellPhoneDataMock.find((phone) => phone.userId === user.userId);
    if (!phoneNumber) {
      throw new Error(`Phone number not found for userId: ${user.userId}`);
    }
    const address = addressDataMock.find((addr) => addr.userId === user.userId);
    if (!address) {
      throw new Error(`Address not found for userId: ${user.userId}`);
    }

    return {
      id: user.userId,
      userId: user.userId,
      avatar: user.avatarUrl,
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: phoneNumber,
      addresses: address,
      email: user.email,
      about: `About ${user.firstName} ${user.lastName}`,
      isFavorite: false,
      isBlocked: false,
      isPinned: false,
      isArchived: false,
      isDeleted: false,
      isOnline: user.isOnline,
    };
  });
};

export const contactData: ContactsData[] = combineContactData();
