import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tile = styled.div<{ $isFeatured?: boolean }>`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  padding: 20px;
  height: ${({ theme }) => theme.tile.height};
  grid-column: ${({ $isFeatured }) => ($isFeatured ? 'span 2' : 'span 1')};
  grid-row: ${({ $isFeatured }) => ($isFeatured ? 'span 2' : 'span 1')};

  &:hover {
    transform: scale(1.03);

    .hover-reveal {
      filter: grayscale(0%) brightness(1);
    }
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.global.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CTATile = styled(Tile)`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.text.white};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text.light};
    text-align: center;
    margin-bottom: 16px;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    height: ${({ theme }) => theme.tile.mobileTile};
  }
`;

export const CTAButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.links.color};
  border: ${({ theme }) => theme.border.borderSecondaryColor};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  padding: 10px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.authorization.boxShadow};
    color: ${({ theme }) => theme.links.hoverColor};
  }

  &:active {
    transform: scale(0.95);
  }
`;
