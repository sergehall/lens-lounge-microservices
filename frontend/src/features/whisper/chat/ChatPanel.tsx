// src/features/chat/ChatPanel.tsx
import React from 'react';

import NavigationButtons from '../Navigation-buttons';
import * as S from '../ContactsList.styles';

import { useChatLogic } from './hooks/useChatLogic';
import ChatList from './ChatList';
import ChatConversation from './ChatConversation';
import InputSection from './InputSection';

import { useAuthContext } from '@/context/AuthContext';

const ChatPanel: React.FC = () => {
  const { message, setMessage, selectedDialog, handleSendMessage, handleUploadFile } =
    useChatLogic();

  const { user } = useAuthContext();
  const userId = user?.userId;

  return (
    <S.WhisperChatContainer>
      {/* Sidebar with contacts and navigation */}
      <S.UserListWrapper>
        <ChatList />
        <NavigationButtons />
      </S.UserListWrapper>

      {/* Main chat area */}
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
