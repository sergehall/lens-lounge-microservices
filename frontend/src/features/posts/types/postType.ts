export interface PostType {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  createdAt: string;
  dependencyIsBanned: boolean;
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
  blogId: string;
  blogName: string;
  postOwnerId: string;
}
