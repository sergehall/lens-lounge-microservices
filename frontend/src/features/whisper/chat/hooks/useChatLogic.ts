import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { fetchChats, selectChatsStatus, updateChatMessages } from '../chatSlice';
import { Message } from '../types/message.type';

import { useAuth } from '@/api/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useSafeChats } from '@/hooks/useSafeChats';

export const useChatLogic = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectChatsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChats());
    }
  }, [dispatch, status]);

  const { chatId } = useParams<{ chatId: string }>();
  const chats = useSafeChats();
  const { user } = useAuth();
  const currentUserId = user?.userId || '0';
  const [message, setMessage] = useState('');

  const selectedDialog = useMemo(() => {
    if (!Array.isArray(chats)) {
      console.warn('chats is not an array:', chats);
      return null;
    }

    return chats.find((chat) => chat.id === chatId) || null;
  }, [chats, chatId]);

  const recipientId = useMemo(() => {
    if (!selectedDialog?.participants || !Array.isArray(selectedDialog.participants)) return '';
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
