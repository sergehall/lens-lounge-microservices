// ChatConversation.tsx
import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../../hooks/reduxHooks';

import { selectMessagesByChatId } from './chatSlice';
import { Message } from './types/message.type';
import * as S from './chat.styles';

interface ChatConversationProps {
  chatId: string;
  currentUserId: string;
}

const ChatConversation: React.FC<ChatConversationProps> = ({ chatId, currentUserId }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const messages: Message[] = useAppSelector(selectMessagesByChatId(chatId));

  useEffect(() => {
    const container = messagesContainerRef.current;
    const scrollTarget = messagesEndRef.current;

    if (container && scrollTarget) {
      const isNearBottom =
        container.scrollHeight - container.clientHeight <= container.scrollTop + 50;

      if (isNearBottom) {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [messages]);

  if (messages.length === 0) {
    return <p>No messages to display</p>;
  }

  return (
    <S.MessagesContainer ref={messagesContainerRef}>
      {messages.map((message: Message) => (
        <S.MessageItem key={message.id} $isMine={message.senderId === currentUserId}>
          <S.Timestamp>
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </S.Timestamp>
          <S.MessageText>{message.message}</S.MessageText>
        </S.MessageItem>
      ))}
      <div ref={messagesEndRef} />
    </S.MessagesContainer>
  );
};

export default ChatConversation;
