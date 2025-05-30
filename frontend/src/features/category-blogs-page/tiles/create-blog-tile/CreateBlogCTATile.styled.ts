import styled from 'styled-components';

import { Tile } from '../../categoryBlogsPage.styles';

export const CTATile = styled(Tile)`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.text.light};
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    padding-top: 5px;
    height: ${({ theme }) => theme.tile.mobileTile};
    h3 {
      margin: 15px 0 5px;
    }
  }
`;

export const CTAButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.links.color};
  border: 2px solid #61dafb;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.authorization.boxShadow};
    color: ${({ theme }) => theme.links.hoverColor};
    ${({ theme }) => theme.links.hoverColor};
  }

  &:active {
    transform: scale(0.95);
  }
`;
