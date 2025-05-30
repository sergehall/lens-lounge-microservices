import styled from 'styled-components';

import { Tile } from '../../categoryBlogsPage.styles';

export const BlogTile = styled(Tile)`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 66.66%;
    object-fit: cover;
    display: block;
  }
`;

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0 0 3px;
    font-size: 1.1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.85rem;
    color: #ccc;
    margin-bottom: 8px;
    flex-grow: 1;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 0.7rem;
    color: #888;
  }
`;

export const BackButton = styled.button`
  grid-column: 1 / -1;
  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

  color: ${({ theme }) => theme.text.white};
  background-color: ${({ theme }) => theme.global.backgroundColor};

  border: none;
  border-radius: 12px;
  cursor: pointer;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  span {
    display: inline-block;
    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }

  &:hover span {
    transform: scale(1.05); /* enlarge only text */
    color: ${({ theme }) => theme.links.hoverColor};
  }

  &:active span {
    transform: scale(1);
  }
`;
