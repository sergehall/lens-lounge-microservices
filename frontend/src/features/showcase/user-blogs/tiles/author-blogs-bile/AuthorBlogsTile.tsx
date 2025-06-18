import React from 'react';
import { useParams } from 'react-router-dom';

import BlogListRenderer from '../../../../category-blogs-page/BlogListRenderer';
import { makeSelectUserBlogsForCategory } from '../../selectors';

import { useAppSelector } from '@/hooks/reduxHooks';
import { useAuth } from '@/features/api/hooks/useAuth';

const AuthorBlogsTile: React.FC = () => {
  const { name = '' } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name);

  const { user } = useAuth();
  const username = user?.login || '';

  const blogs = useAppSelector(makeSelectUserBlogsForCategory(decodedName, username));

  return <BlogListRenderer blogs={blogs} />;
};

export default AuthorBlogsTile;
