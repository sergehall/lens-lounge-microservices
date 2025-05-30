import styled from 'styled-components';

export const ImageBannerContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-bottom: 5px;
  border-radius: ${({ theme }) => theme.imageBanner.containerBorderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

export const ImageBannerContentImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ theme }) => theme.imageBanner.containerBorderRadius};
`;

export const ImageBannerTextWrapper = styled.div`
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for the element's size */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  text-align: center;
  padding: ${({ theme }) => theme.imageBanner.textWrapperPadding};
  z-index: 2; /* Ensure text is on top of the image */
  pointer-events: none; /* Allow interactions to pass through to the image */
`;

export const ImageBannerContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.imageBanner.titleFontSize};
  //margin: 0 0 10px;
  margin: 0;
  color: ${({ theme }) => theme.highlights.white};
  text-shadow: ${({ theme }) => theme.imageBanner.textShadow};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.imageBanner.titleFontSizeMobile};
  }
`;

export const ImageBannerContentDescription = styled.p`
  font-size: ${({ theme }) => theme.imageBanner.descriptionFontSize};
  margin: 0;
  color: ${({ theme }) => theme.highlights.white};
  text-shadow: ${({ theme }) => theme.imageBanner.textShadow};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.imageBanner.descriptionFontSizeMobile};
  }
`;
