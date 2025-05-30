import React from 'react';

import { PostType } from '../types/postType';

import { Card, Content, Description, Metadata, Title } from './postCard.styles';

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Description>{post.shortDescription}</Description>
      <Metadata>
        <span>By: {post.postOwnerId}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </Metadata>
      <Content>{post.content}</Content>
    </Card>
  );
};

export default PostCard;
