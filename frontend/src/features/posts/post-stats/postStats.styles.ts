import styled from 'styled-components';

export const StatsWrapper = styled.div`
  padding: 0 16px 8px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LikesButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.text.white};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.links.hoverColor};
  }
`;
