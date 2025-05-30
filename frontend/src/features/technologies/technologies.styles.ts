import styled from 'styled-components';

export const TechnologyContainer = styled.div`
  padding: 5px;
  color: ${({ theme }) => theme.global.secondaryColor};
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.technologies.responsivePadding};
  }
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 5px;
`;

export const CategoryTile = styled.div`
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  padding: 20px;
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const CategoryTitle = styled.h4`
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.text.lightGray};
`;

export const TechnologyList = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  margin: 0;
`;

export const TechnologyItem = styled.li`
  margin-bottom: 6px;
`;

export const TechnologyLink = styled.a`
  color: ${({ theme }) => theme.global.secondaryColor};
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${({ theme }) => theme.highlights.yellow};
    text-decoration: underline;
  }
`;

export const PopupWindow = styled.div`
  color: ${({ theme }) => theme.global.backgroundColor};
  position: absolute;
  width: 650px;
  background-color: ${({ theme }) => theme.highlights.lightGray};
  border: ${({ theme }) => theme.border.darkGray};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 1rem;
  font-size: 0.9rem;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  iframe {
    border-radius: 4px;
    width: 100%;
    height: 200px;
    border: none;
  }

  @media (max-width: 600px) {
    width: 220px;
    left: 5%;
    top: 10%;
    padding: 0.5rem;
    font-size: 0.8rem;

    iframe {
      height: 150px;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  border: none;
  overflow: hidden;
`;
