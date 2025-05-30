import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { WHISPER_ROUTES } from '../../../routes/route-definitions/whisper.routes';
import * as S from '../ContactsList.styles';
import NavigationButtons from '../Navigation-buttons';

import ContactDetails from './ContactDetails';
import ContactsList from './ContactsList';
import { selectContacts } from './contactListSlice';

const Contacts: React.FC = () => {
  const navigate = useNavigate();
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = useAppSelector(selectContacts);
  const selectedContact = contacts.find((c) => c.userId === contactId) || null;

  const handleContactSelect = (contactId: string) => {
    navigate(WHISPER_ROUTES.build.contactId(contactId));
  };

  return (
    <S.WhisperChatContainer>
      <S.UserListWrapper>
        <ContactsList
          contacts={contacts}
          selectedUserId={selectedContact?.userId || null}
          onContactSelect={handleContactSelect}
        />
        <NavigationButtons />
      </S.UserListWrapper>
      <S.ChatsOrContactsInfoSection>
        {selectedContact ? (
          <ContactDetails contact={selectedContact} />
        ) : (
          <S.NoContacts>Select a contact to view details</S.NoContacts>
        )}
      </S.ChatsOrContactsInfoSection>
    </S.WhisperChatContainer>
  );
};

export default Contacts;
