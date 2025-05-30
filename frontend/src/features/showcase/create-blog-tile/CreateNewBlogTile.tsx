import React from 'react';

import { Icons } from '../../../utils/icons';

import * as S from './CreateBlogTile.styled';

/**
 * Renders a call-to-action tile encouraging users to create a blog
 * within a specific category (e.g., Photography, Tech, etc.)
 */
const CreateNewBlogTile: React.FC = () => {
  return (
    <S.Wrapper>
      <S.CTATile>
        <S.IconWrapper>
          <Icons.Users size={24} aria-hidden="true" />
        </S.IconWrapper>

        {/* Headline dynamically includes the selected category */}
        <h3>Create your own blog</h3>

        {/* Brief explanation to prompt user action */}
        <p>Lens Lounge are spaces for your ideas. Get started in minutes.</p>

        {/* Primary action button */}
        <S.CTAButton aria-label={`Create a blog about`}>Create</S.CTAButton>
      </S.CTATile>
    </S.Wrapper>
  );
};

export default CreateNewBlogTile;
