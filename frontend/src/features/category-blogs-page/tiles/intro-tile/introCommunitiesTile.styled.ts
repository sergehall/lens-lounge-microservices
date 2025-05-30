import styled from 'styled-components';

import { Tile } from '../../categoryBlogsPage.styles';

export const IntroTile = styled(Tile)`
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
