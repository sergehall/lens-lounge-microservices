// src/features/showcase/user-blogs/tiles/author-blogs-bile/AuthorBlogsTile.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../hooks/reduxHooks';
import { selectProfile } from '../../../../auth/authSlice';
import BlogListRenderer from '../../../../category-blogs-page/BlogListRenderer';
import { makeSelectUserBlogsForCategory } from '../../selectors';

const AuthorBlogsTile: React.FC = () => {
  const { name = '' } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name);
  const username = useAppSelector(selectProfile)?.login || '';
  const blogs = useAppSelector(makeSelectUserBlogsForCategory(decodedName, username));

  return <BlogListRenderer blogs={blogs} />;
};

export default AuthorBlogsTile;
