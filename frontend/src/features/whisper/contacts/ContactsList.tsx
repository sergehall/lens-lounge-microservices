// src/features/whisper/contacts/ContactsList.tsx

import React from 'react';

import * as S from '../ContactsList.styles';

import { ContactsData } from './contactsData';
import { AvatarSize } from './enums/avatarSize.enum';

import PLACEHOLDER_IMAGE_DEFAULT from '@/assets/images/placeholderImageDefault.png';
// const PLACEHOLDER_IMAGE_DEFAULT = './frontend/src/assets/images/placeholderImageDefault.png';

interface ContactsListProps {
  contacts: ContactsData[];
  selectedUserId: string | null;
  onContactSelect: (userId: string) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  selectedUserId,
  onContactSelect,
}) => {
  return (
    <S.UserList>
      {contacts.map((contact) => (
        <S.UserItem
          key={contact.userId}
          onClick={() => onContactSelect(contact.userId)}
          $isActive={selectedUserId === contact.userId}
        >
          <S.Avatar
            src={contact.avatar || PLACEHOLDER_IMAGE_DEFAULT}
            alt="avatar"
            $isActive={contact.isOnline}
            $size={AvatarSize.Small}
          />
          <S.UserDetails>
            <S.UserName>{contact.login}</S.UserName>
            <S.UserStatus $isOnline={contact.isOnline}>
              {contact.isOnline ? 'Online' : 'Offline'}
            </S.UserStatus>
          </S.UserDetails>
        </S.UserItem>
      ))}
    </S.UserList>
  );
};

export default ContactsList;
