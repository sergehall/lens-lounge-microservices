import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Icons } from '../../../utils/icons';
import { toggleLike } from '../interactions/postInteractionsSlice';

import * as S from './postActions.styles';

interface PostActionsProps {
  postId: string;
}

const PostActions: React.FC<PostActionsProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => state.postInteractions.likedByUser[postId]);

  return (
    <S.ActionBar>
      <S.Button onClick={() => dispatch(toggleLike({ postId }))} $active={liked}>
        {liked ? <Icons.Heart /> : <Icons.RegHeart />}
      </S.Button>
      <S.Button>
        <Icons.Comment />
      </S.Button>
      <S.Button>
        <Icons.Share />
      </S.Button>
    </S.ActionBar>
  );
};

export default PostActions;
