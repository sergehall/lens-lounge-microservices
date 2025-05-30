import styled from 'styled-components';

import { AvatarSize } from './contacts/enums/avatarSize.enum';

export const WhisperChatContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr auto;
  height: 100vh;
  //height: 100%;
  padding: 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

export const ChatsOrContactsInfoSection = styled.div`
  display: grid;
  grid-template-rows: 1fr auto; /* Messages take available space, input stays at bottom */
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 8px;
  height: 100%;
  gap: 5px;
  transition: height 0.3s ease-in-out; /* Smooth resizing when input expands */
`;

export const UserListWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto; /* Contacts list grows, buttons stay at bottom */
  height: 100%;
  padding-right: 5px;
`;

export const UserList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  border-right: 1px solid ${({ theme }) => theme.contacts.userListBorderColor};
  padding: 10px;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  box-shadow: ${({ theme }) => theme.box.boxShadowNeonShort};
`;

export const UserItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.box.boxShadowNeonShort};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.contacts.userBgActiveColor : theme.global.secondaryColor};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.contacts.userItemActiveColor : theme.contacts.userItemInactiveColor};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.contacts.userBgActiveColor};
  }
`;

export const Avatar = styled.img<{ $isActive: boolean; $size: AvatarSize }>`
  width: ${({ theme, $size }) => theme.avatarSizes[$size]};
  height: ${({ theme, $size }) => theme.avatarSizes[$size]};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.highlights.white : theme.global.semiTransparentBorder};

  @media (max-width: 600px) {
    width: ${({ theme }) => theme.avatarSizes[AvatarSize.Small]};
    height: ${({ theme }) => theme.avatarSizes[AvatarSize.Small]};
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 5px;
`;

export const UserStatus = styled.span<{ $isOnline: boolean }>`
  // Use $isOnline as a transient prop
  font-size: ${({ $isOnline }) => ($isOnline ? '1rem' : '0.7rem')};
  color: ${({ $isOnline, theme }) =>
    $isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
  line-height: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoContacts = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  padding: 20px;
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: 6px;
`;
