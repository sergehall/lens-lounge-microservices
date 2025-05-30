import React, { useState } from 'react';

import { useAppSelector } from '../../../hooks/reduxHooks';

import { StatsWrapper, LikesButton } from './postStats.styles';
import PostLikesModal, { LikeUser } from './post-likes-modal/PostLikesModal';

interface PostStatsProps {
  postId: string;
}

const PostStats: React.FC<PostStatsProps> = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const likes: number = useAppSelector((state) => state.postInteractions.likes[postId] || 0);

  // Temporary mocks of users (ideally fetch from backend later)
  const usersWhoLiked: LikeUser[] = [
    {
      id: '1',
      blogName: 'photography_journal',
      username: 'EmmyMax',
      avatarUrl:
        'https://masterpiecer-images.s3.yandex.net/e29101853b7111ee934e1282c0ba7723:upscaled',
    },
    {
      id: '2',
      blogName: 'it-incubator',
      username: 'Dimych#1751',
      avatarUrl: 'https://i.ytimg.com/vi/ujvaADXPO8E/maxresdefault.jpg',
    },
    {
      id: '3',
      blogName: 'photography_journal',
      username: 'PierreDeFermat',
      avatarUrl:
        'https://thumbs.dreamstime.com/b/belarus-city-gomil-september-holiday-slavic-man-national-dress-young-ukrainian-belarusian-guy-embroidered-shirt-187379288.jpg',
    },
    {
      id: '4',
      blogName: 'street_style',
      username: 'Lovelace',
      avatarUrl:
        'https://camo.githubusercontent.com/d05e80bf07249ed858dcd65c362524dbcbe72093973c35421de936560ef7a7af/68747470733a2f2f626c6f672e6765656b68756e7465722e636f6d2e62722f77702d636f6e74656e742f75706c6f6164732f323032322f30312f6164612d6c6f76656c6163652d322e6a7067',
    },
  ];

  return (
    <>
      <StatsWrapper>
        <LikesButton onClick={() => setShowModal(true)}>
          {likes} {likes === 1 ? 'like' : 'likes'}
        </LikesButton>
      </StatsWrapper>

      {showModal && <PostLikesModal users={usersWhoLiked} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default PostStats;
