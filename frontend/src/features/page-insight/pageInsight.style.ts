import styled from 'styled-components';

export const PageInsightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  margin-bottom: 5px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.global.secondaryColor};
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  box-shadow: ${({ theme }) => theme.summarize.boxShadow};
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
`;

export const PageInsightImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  object-fit: cover;
  background-color: ${({ theme }) => theme.highlights.white};
  margin-right: 15px;
  box-shadow: ${({ theme }) => theme.summarize.boxShadow};

  @media (max-width: 600px) {
    margin-right: 10px;
    width: 70px;
    height: 70px;
  }
`;

export const PageInsightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.summarize.textGap};
  flex: 1;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 600px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const PageInsightTitle = styled.h2`
  font-size: ${({ theme }) => theme.summarize.titleFontSize};
  margin: 0;
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  text-align: left;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.summarize.titleFontSizeMobile};
  }
`;

export const PageInsightDescription = styled.p`
  font-size: ${({ theme }) => theme.summarize.descriptionFontSize};
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  margin: 0;
  text-align: left;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.summarize.descriptionFontSizeMobile};
  }
`;
