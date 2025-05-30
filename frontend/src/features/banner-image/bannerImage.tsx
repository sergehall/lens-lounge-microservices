import React from 'react';

import defaultImageBanner from '../../assets/images/defaultImageBanner.png';

import {
  ImageBannerContentContainer,
  ImageBannerContentImage,
  ImageBannerTextWrapper,
  ImageBannerContentTitle,
  ImageBannerContentDescription,
} from './bannerImage.style';

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
        onError={(e) => (e.currentTarget.src = defaultImageBanner)}
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
