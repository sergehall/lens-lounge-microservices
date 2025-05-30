import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 12px;
  padding: 5px 20px;
  color: ${({ theme }) => theme.text.white};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  height: ${({ theme }) => theme.tile.height};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);

    .hover-reveal {
      filter: grayscale(0%) brightness(1);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const IconWrapper = styled.div`
  padding-top: 20px;
  color: ${({ theme }) => theme.global.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.white};
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  span {
    display: inline-block;
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: scale(1.05); /* enlarges only text */
    color: ${({ theme }) => theme.links.hoverColor};
  }

  &:active span {
    transform: scale(1);
  }
`;
