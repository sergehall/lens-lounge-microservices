export interface PostImageType {
  id: string;
  imageUrl: string;
  postId: string;
  postTitle: string;
  postOwnerId: string;
  createdAt: string;
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
}
