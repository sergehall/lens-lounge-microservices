import React, { useState } from 'react';

import * as S from './bannerImage.style';

const FALLBACK_IMAGE = '/images/defaultImageBanner.png';

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
        <S.ImageBannerContentTitle>Image Banner Title</S.ImageBannerContentTitle>
        <S.ImageBannerContentDescription>
          This is a banner image description.
        </S.ImageBannerContentDescription>
      </S.ImageBannerTextWrapper>
    </S.ImageBannerContentContainer>
  );
};

export default BannerImage;
