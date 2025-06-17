import React, { useState } from 'react';

import * as S from './bannerImage.style';

import FALLBACK_IMAGE from '@/assets/images/defaultImageBanner.png';

type Props = {
  imageUrl: string;
  altText?: string;
};

const BannerImage: React.FC<Props> = ({ imageUrl, altText = 'Default banner image' }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <S.ImageBannerContentContainer>
      <S.ImageBannerContentImage
        src={hasError ? FALLBACK_IMAGE : imageUrl}
        alt={altText}
        onError={() => setHasError(true)}
      />
      <S.ImageBannerTextWrapper>
        <S.ImageBannerContentTitle>Title</S.ImageBannerContentTitle>
        <S.ImageBannerContentDescription>
          This is a banner description.
        </S.ImageBannerContentDescription>
      </S.ImageBannerTextWrapper>
    </S.ImageBannerContentContainer>
  );
};

export default BannerImage;
