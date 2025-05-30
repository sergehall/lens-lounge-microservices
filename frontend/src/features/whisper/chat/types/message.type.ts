export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  chatId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  read: boolean;
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
}
