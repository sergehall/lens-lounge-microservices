import React, { useState, useRef, useEffect } from 'react';

import {
  HeaderWrapper,
  Meta,
  EllipsisButton,
  Dropdown,
  MenuItem,
  DotSeparator,
  TimeAgo,
  UserName,
} from './postHeader.styles';

import { WHISPER_ROUTES } from '@/routes/route-definitions/whisper.routes';
import { Icons } from '@/utils/icons';
import { timeAgo } from '@/utils/timeAgo';

export interface PostHeaderProps {
  username: string;
  postId: string;
  createdAt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, postId, createdAt }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const path = WHISPER_ROUTES.build.postId(postId);

  // Optional: Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuVisible]);

  return (
    <HeaderWrapper>
      <Meta>
        <UserName to={path}>@{username}</UserName>
        <DotSeparator>•</DotSeparator>
        <TimeAgo>{timeAgo(createdAt)}</TimeAgo>
      </Meta>

      <EllipsisButton onClick={toggleMenu}>
        <Icons.EllipsisExtraBold size={23} />
      </EllipsisButton>
      {menuVisible && (
        <Dropdown ref={menuRef}>
          <MenuItem red>Report</MenuItem>
          <MenuItem red>Unfollow</MenuItem>
          <MenuItem>Add to favorites</MenuItem>
          <MenuItem>Go to post</MenuItem>
          <MenuItem>Share to…</MenuItem>
          <MenuItem>Copy link</MenuItem>
          <MenuItem>Embed</MenuItem>
          <MenuItem>About this account</MenuItem>
          <MenuItem>Cancel</MenuItem>
        </Dropdown>
      )}
    </HeaderWrapper>
  );
};

export default PostHeader;
