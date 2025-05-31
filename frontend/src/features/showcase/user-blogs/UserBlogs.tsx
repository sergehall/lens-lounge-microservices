import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { SHOWCASE_ROUTES } from '../../../routes/route-definitions/showcase.routes';
import * as S from '../../category-blogs-page/categoryBlogsPage.styles';
import { selectProfile } from '../../auth/authSlice';

import AuthorBlogsTile from './tiles/author-blogs-bile/AuthorBlogsTile';
import { CategoryNotFound } from './UserBlogs.styles';
import { loadUserBlogs } from './userBlogsSlice';

const UserBlogs: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectProfile);
  const username = profile?.login || '';

  useEffect(() => {
    if (username) {
      dispatch(loadUserBlogs(username));
    }
  }, [username, dispatch]);

  if (!name) return <CategoryNotFound>Category not found</CategoryNotFound>;

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => navigate(SHOWCASE_ROUTES.root)}>
        <span>← Back to showcase</span>
      </S.BackButton>
      <S.Grid>
        <AuthorBlogsTile />
      </S.Grid>
    </S.Wrapper>
  );
};

export default UserBlogs;
