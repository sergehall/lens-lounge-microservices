import React from 'react';

import {
  ImageBannerContentContainer,
  ImageBannerContentImage,
  ImageBannerTextWrapper,
  ImageBannerContentTitle,
  ImageBannerContentDescription,
} from './bannerImage.style';

const DEFAULT_BANNER_IMAGE_URL = '/images/defaultImageBanner.png';

interface ImageBannerContentProps {
  imageUrl: string;
  altText?: string;
}

const BannerImage: React.FC<ImageBannerContentProps> = ({
  imageUrl,
  altText = 'Default banner posts-slider-images',
}) => {
  return (
    <ImageBannerContentContainer>
      <ImageBannerContentImage
        src={imageUrl}
        alt={altText}
        onError={(e) => (e.currentTarget.src = DEFAULT_BANNER_IMAGE_URL)}
      />
      <ImageBannerTextWrapper>
        <ImageBannerContentTitle>Image Banner Title</ImageBannerContentTitle>
        <ImageBannerContentDescription>
          This is a banner image description.
        </ImageBannerContentDescription>
      </ImageBannerTextWrapper>
    </ImageBannerContentContainer>
  );
};

export default BannerImage;
