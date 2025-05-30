import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { selectProfile } from '../../../auth/authSlice';
import { fetchChats, selectChatsStatus, updateChatMessages } from '../chatSlice';
import { Message } from '../types/message.type';

export const useChatLogic = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectChatsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChats());
    }
  }, [dispatch, status]);

  const { chatId } = useParams<{ chatId: string }>();
  const chats = useAppSelector((state) => state.whisperPage.chat.conversations);
  const profile = useAppSelector(selectProfile);
  const currentUserId = profile?.userId || '0';
  const [message, setMessage] = useState('');

  const selectedDialog = useMemo(() => {
    return chats.find((chat) => chat.id === chatId) || null;
  }, [chats, chatId]);

  const recipientId = useMemo(() => {
    if (!selectedDialog) return '';
    return selectedDialog.participants.find((id) => id !== currentUserId) || '';
  }, [selectedDialog, currentUserId]);

  const handleSendMessage = useCallback(() => {
    if (message.trim() && selectedDialog && recipientId) {
      const newMessage: Message = {
        id: (selectedDialog.messages.length + 1).toString(),
        senderId: currentUserId,
        recipientId,
        chatId: selectedDialog.id,
        message,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        read: false,
        isBanned: false,
        banDate: null,
        banReason: null,
      };

      dispatch(updateChatMessages({ chatId: selectedDialog.id, newMessage }));
      setMessage('');
    }
  }, [message, selectedDialog, recipientId, dispatch, currentUserId]);

  const handleUploadFile = () => {
    console.log('File upload triggered');
  };

  return {
    message,
    setMessage,
    selectedDialog,
    handleSendMessage,
    handleUploadFile,
  };
};
