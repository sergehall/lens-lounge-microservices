import { AddressData } from '../../users/mocks/usersMock';

export const formatAddress = (addresses: AddressData): string => {
  return `${addresses.street}, ${addresses.city}${addresses.state ? `, ${addresses.state}` : ''} ${addresses.postalCode}, ${addresses.country}`;
};
