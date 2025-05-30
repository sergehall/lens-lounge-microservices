import React, { useEffect } from 'react';

import SinglePost from '../SinglePost';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import {
  fetchHomePosts,
  selectHomeError,
  selectHomeLoading,
  selectHomePosts,
} from './postsSliderSlice';
import { ErrorMsg, FeedContainer, Loader } from './postsSlider.styles';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectHomePosts);
  const loading = useAppSelector(selectHomeLoading);
  const error = useAppSelector(selectHomeError);

  useEffect(() => {
    dispatch(fetchHomePosts());
  }, [dispatch]);

  return (
    <FeedContainer>
      {loading && <Loader>Loading posts...</Loader>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {!loading &&
        !error &&
        posts.map((postProps) => <SinglePost key={postProps.post.id} {...postProps} />)}
    </FeedContainer>
  );
};

export default HomePage;
