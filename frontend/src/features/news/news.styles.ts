import styled from 'styled-components';

// News Container
export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 20px 40px;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  background-color: ${({ theme }) => theme.global.backgroundColor};
  color: ${({ theme }) => theme.contact.textColor};
  box-shadow: ${({ theme }) => theme.global.transparentBorder};
  margin: 0 auto;
  min-height: 100vh;
`;

// News Title
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.text.fontSize.title};
  color: ${({ theme }) => theme.highlights.orangeRed};
  margin: 10;
  text-align: center;
  padding-bottom: 20px;
  line-height: ${({ theme }) => theme.text.lineHeight};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.text.fontSize.mobileTitle};
  }
`;

// Article List
export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center; /* Center articles within the list */
`;

// Individual Article Item
export const ArticleItem = styled.li`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.news.boxShadow};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
  background-color: ${({ theme }) => theme.global.secondaryColor};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(97, 218, 251, 0.7); /* Slightly intensified shadow on hover */
    background-color: ${({ theme }) => theme.links.hoverBg}; /* Dark background on hover */
  }
`;

// Article Link
export const ArticleLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit; /* Inherit color for default state */
  padding: 10px;
  transition: color 0.3s ease;

  ${ArticleItem}:hover & {
    color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
  }
`;

// Article Title
export const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.news.highlightColor}; /* Default title color */
  transition: color 0.3s ease;

  ${ArticleItem}:hover & {
    color: ${({ theme }) => theme.news.hoverTextColor}; /* White title on hover */
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// Article Text
export const ArticleText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.colorDarkGray};
  transition: color 0.3s ease;

  ${ArticleItem}:hover & {
    color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  /* Restrict to two lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Author and Date Info
export const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.slateGray};
  margin-top: 10px;
  font-style: italic;
  opacity: 0.85;

  ${ArticleItem}:hover & {
    color: ${({ theme }) => theme.news.hoverTextColor};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }
`;
