import React from 'react';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  UserList,
  UserItem,
  Avatar,
  LeftSide,
  UserNameWrapper,
  Username,
  RealName,
  FollowButton,
} from './likesModal.styles';

export interface LikeUser {
  id: string;
  blogName: string;
  username: string;
  avatarUrl: string;
}

interface PostLikesModalProps {
  users: LikeUser[];
  onClose: () => void;
}

const PostLikesModal: React.FC<PostLikesModalProps> = ({ users, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          Likes
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <UserList>
          {users.map((user) => (
            <UserItem key={user.id}>
              <LeftSide>
                <Avatar src={user.avatarUrl} alt={user.username} />
                <UserNameWrapper>
                  <Username>{user.blogName}</Username>
                  <RealName>{user.username}</RealName>
                </UserNameWrapper>
              </LeftSide>
              <FollowButton>Follow</FollowButton>
            </UserItem>
          ))}
        </UserList>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PostLikesModal;
