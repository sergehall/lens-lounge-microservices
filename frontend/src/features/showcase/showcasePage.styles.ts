import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.default};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  padding-bottom: 5px;
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

export const Label = styled.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  z-index: 2;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileSection = styled.div`
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: ${({ theme }) => theme.border.borderRadius};
`;

export const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const Tile = styled.div<{ $isFeatured: boolean }>`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  padding: 5px 20px;
  color: ${({ theme }) => theme.text.white};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
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

export const BlogsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small10};
`;

export const HoverReveal = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  filter: grayscale(50%) brightness(0.8);
  transition: filter 0.3s ease;
  z-index: 1;

  /* This is what changes on hover */
  ${Tile}:hover & {
    filter: grayscale(0%) brightness(1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  pointer-events: none;
`;
