import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 5px;
  grid-auto-flow: dense;
`;

export const Tile = styled.div<{ $isFeatured: boolean }>`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: flex-end;

  grid-column: ${({ $isFeatured }) => ($isFeatured ? 'span 2' : 'span 1')};
  grid-row: ${({ $isFeatured }) => ($isFeatured ? 'span 2' : 'span 1')};

  &:hover {
    transform: scale(1.03);

    .hover-reveal {
      filter: grayscale(0%) brightness(1);
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  pointer-events: none;
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
