import { ChatType } from '@/features/whisper/chat/chatSlice';
import { useAppSelector } from '@/hooks/reduxHooks';

export const useSafeChats = (): ChatType[] => {
  const chats = useAppSelector((state) => state.whisperPage.chat.conversations);

  if (!Array.isArray(chats)) {
    console.warn('⚠️ useSafeChats: chats is not an array:', chats);
    return [];
  }

  return chats;
};
