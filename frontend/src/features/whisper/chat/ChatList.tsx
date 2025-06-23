import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { User } from '../../users/types/user.type';
import { selectAllUsers } from '../../users/userSlice';
import { AvatarSize } from '../contacts/enums/avatarSize.enum';
import * as S from '../ContactsList.styles';

import { selectChats } from './chatSlice';

import { WHISPER_ROUTES } from '@/routes/route-definitions/whisper.routes';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useAuth } from '@/api/hooks/useAuth';

const ChatList: React.FC = () => {
  const navigate = useNavigate();
  const { chatId: selectedChatId } = useParams<{ chatId: string }>();

  const chats = useAppSelector(selectChats);
  const users = useAppSelector(selectAllUsers);
  const { user } = useAuth();
  const currentUserId = user?.userId || '0';

  // Get an interlocutor from chat participants
  const getRecipientUser = (participants: string[]): User | null => {
    const recipientId = participants.find((id) => id !== currentUserId);
    if (!recipientId) return null;

    return users.find((user) => user.userId === recipientId) || null;
  };

  const handleDialogSelect = (chatId: string) => {
    navigate(WHISPER_ROUTES.build.chatId(chatId));
  };

  return (
    <S.UserList>
      {chats.map((chat) => {
        const user = getRecipientUser(chat.participants);
        if (!user) return null;

        return (
          <S.UserItem
            key={chat.id}
            onClick={() => handleDialogSelect(chat.id)}
            $isActive={selectedChatId === chat.id}
          >
            <S.Avatar
              src={user.avatarUrl || '/default-avatar.png'}
              alt={`${user.login}'s avatar`}
              $isActive={selectedChatId === chat.id}
              $size={AvatarSize.Small}
            />
            <S.UserDetails>
              <S.UserName>{user.login}</S.UserName>
              <S.UserStatus $isOnline={user.isOnline}>
                {user.isOnline ? 'Online' : 'Offline'}
              </S.UserStatus>
            </S.UserDetails>
          </S.UserItem>
        );
      })}
    </S.UserList>
  );
};

export default ChatList;
