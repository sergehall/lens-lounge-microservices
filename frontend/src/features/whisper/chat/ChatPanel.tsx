// /src/features/chat/ChatPanel.tsx
import React from 'react';

import NavigationButtons from '../Navigation-buttons';
import * as S from '../ContactsList.styles';

import ChatList from './ChatList';
import ChatConversation from './ChatConversation';
import InputSection from './InputSection';
import { useChatLogic } from './hooks/useChatLogic';

import { useGetUserQuery } from '@/features/api/apiSlice';

const ChatPanel: React.FC = () => {
  const { message, setMessage, selectedDialog, handleSendMessage, handleUploadFile } =
    useChatLogic();

  const { data: user } = useGetUserQuery();
  const userId = user?.userId;

  return (
    <S.WhisperChatContainer>
      <S.UserListWrapper>
        <ChatList />
        <NavigationButtons />
      </S.UserListWrapper>
      <S.ChatsOrContactsInfoSection>
        {selectedDialog && userId ? (
          <>
            <ChatConversation chatId={selectedDialog.id} currentUserId={userId} />
            <InputSection
              message={message}
              setMessage={setMessage}
              handleSendMessage={handleSendMessage}
              handleUploadFile={handleUploadFile}
            />
          </>
        ) : (
          <S.NoContacts>Select a chat to view messages</S.NoContacts>
        )}
      </S.ChatsOrContactsInfoSection>
    </S.WhisperChatContainer>
  );
};

export default ChatPanel;
