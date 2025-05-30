export interface Blog {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  lastPosted: string;
  isMembership: boolean;
  dependencyIsBanned: boolean;
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
  name: string;
  description: string;
  websiteUrl: string;
  blogOwner: string;
  tags: string[];
  imageUrl: string;
  // blogOwner: UsersEntity;
  // bannedBlog: BannedUsersForBlogsEntity[];
  // posts: PostsEntity[];
  // comments: CommentsEntity[];
}

export interface BlogPreview {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  tags: string[];
  author: string;
  lastPosted: string;
}
