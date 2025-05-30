import { usersMock } from '../../../users/mocks/usersMock';
import { ChatType } from '../chatSlice';
import { Message } from '../types/message.type';

import { messagesMock } from './messagesMock';

const currentUserId = '0';

// Filter messages between current user and one other user
function getMessagesWithUser(
  currentUserId: string,
  otherUserId: string,
  allMessages: Message[]
): Message[] {
  return allMessages.filter(
    (msg) =>
      (msg.senderId === currentUserId && msg.recipientId === otherUserId) ||
      (msg.senderId === otherUserId && msg.recipientId === currentUserId)
  );
}

// Build ChatType[] structure
export const chatsDataMock: ChatType[] = usersMock.map((user, index) => {
  const messages = getMessagesWithUser(currentUserId, user.userId, messagesMock);

  // Get last message by latest createdAt (optional)
  const lastMessage = messages.length
    ? [...messages].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0]
    : undefined;

  return {
    id: (index + 1).toString(), // or use uuid()
    type: 'private',
    participants: [currentUserId, user.userId],
    createdAt: messages[0]?.createdAt || new Date().toISOString(),
    updatedAt: lastMessage?.createdAt || new Date().toISOString(),
    messages,
    lastMessage,
  };
});
