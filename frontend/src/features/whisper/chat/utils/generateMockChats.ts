// src/features/whisper/chat/utils/generateMockChats.ts

import { User } from '../../../users/types/user.type';
import { usersMock } from '../../../users/mocks/usersMock';
import { messagesMock } from '../mocks/messagesMock';
import { ChatType } from '../chatSlice';
import { Message } from '../types/message.type';

/**
 * Filters messages exchanged between the current user and another user.
 */
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

/**
 * Generates mock chat objects from a list of users and messages.
 * Used to simulate chat data for Redux state.
 *
 * @param currentUserId The ID of the current (logged-in) user
 * @param users List of all users (excluding the current user)
 * @param messages List of all available messages
 * @returns List of ChatType entries matching the schema
 */
export function generateMockChats(
  currentUserId: string,
  users: User[],
  messages: Message[]
): ChatType[] {
  return users
    .filter((user) => user.userId !== currentUserId)
    .map((user, index) => {
      const userMessages = getMessagesWithUser(currentUserId, user.userId, messages);

      const lastMessage = userMessages.length
        ? [...userMessages].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )[0]
        : undefined;

      return {
        id: (index + 1).toString(),
        type: 'private',
        participants: [currentUserId, user.userId],
        createdAt: userMessages[0]?.createdAt || new Date().toISOString(),
        updatedAt: lastMessage?.createdAt || new Date().toISOString(),
        messages: userMessages,
        lastMessage,
      };
    });
}

/**
 * Generates default mock chats for dev usage without needing parameters.
 * Useful for initial Redux state seeding during development.
 */
export function generateDefaultMockChats(): ChatType[] {
  const defaultUserId = '0'; // Use a fixed test user ID
  return generateMockChats(defaultUserId, usersMock, messagesMock);
}
