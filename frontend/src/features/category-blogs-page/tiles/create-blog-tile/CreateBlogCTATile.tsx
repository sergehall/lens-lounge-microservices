import React from 'react';

import { Icons } from '../../../../utils/icons';
import { IconWrapper } from '../../categoryBlogsPage.styles';

import { CTAButton, CTATile } from './CreateBlogCTATile.styled';

interface CreateBlogCTAProps {
  categoryName: string;
}

/**
 * Renders a call-to-action tile encouraging users to create a blog
 * within a specific category (e.g., Photography, Tech, etc.)
 */
const CreateBlogCTATile: React.FC<CreateBlogCTAProps> = ({ categoryName }) => {
  return (
    <CTATile>
      <IconWrapper>
        <Icons.Users size={24} aria-hidden="true" />
      </IconWrapper>

      {/* Headline dynamically includes the selected category */}
      <h3>Create your own blog about {categoryName}</h3>

      {/* Brief explanation to prompt user action */}
      <p>Lens Lounge are spaces for your ideas. Get started in minutes.</p>

      {/* Primary action button */}
      <CTAButton aria-label={`Create a blog about ${categoryName}`}>Create</CTAButton>
    </CTATile>
  );
};

export default CreateBlogCTATile;
