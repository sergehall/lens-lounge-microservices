// src/features/whisper/contacts/ContactsList.tsx

import React from 'react';

import * as S from '../ContactsList.styles';
import imageDefault from '../../../assets/images/placeholderImageDefault.png';

import { ContactsData } from './contactsData';
import { AvatarSize } from './enums/avatarSize.enum';

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
            src={contact.avatar || imageDefault}
            alt="avatar"
            $isActive={contact.isOnline}
            $size={AvatarSize.Small}
          />
          <S.UserDetails>
            <S.UserName>{contact.username}</S.UserName>
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
