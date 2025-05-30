import React from 'react';

import PostFooter from './PostFooter';
import PostHeader from './post-header/PostHeader';
import PostImageSection from './post-image-section/PostImageSection';
import PostActions from './post-actions/PostActions';
import PostStats from './post-stats/PostStats';
import PostContentBlock from './post-content-block/PostContentBlock';
import { PostType } from './types/postType';
import { PostImageType } from './post-image-section/types/postImage';
import { PostWrapper } from './post.styles';

interface UserPost {
  userId: string;
  username: string;
  avatarUrl: string;
}

export interface SinglePostProps {
  user: UserPost;
  post: PostType;
  image: PostImageType;
}

const SinglePost: React.FC<SinglePostProps> = ({ user, post, image }) => {
  return (
    <PostWrapper>
      <PostHeader username={user.username} postId={post.id} createdAt={post.createdAt} />
      <PostImageSection src={image.imageUrl} alt={post.title} />
      <PostActions postId={post.id} />
      <PostStats postId={post.id} />
      <PostContentBlock title={post.title} shortDescription={post.shortDescription} />
      <PostFooter postOwnerId={post.postOwnerId} />
    </PostWrapper>
  );
};

export default SinglePost;
