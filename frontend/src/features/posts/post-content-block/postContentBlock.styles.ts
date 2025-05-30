import styled from 'styled-components';

export const Content = styled.div`
  padding: 0 16px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin: 6px 0;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text.muted};
  margin-bottom: 10px;
`;
