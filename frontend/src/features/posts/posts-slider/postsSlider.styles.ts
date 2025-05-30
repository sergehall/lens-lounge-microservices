import styled from 'styled-components';

export const FeedContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const Loader = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.highlights.red};
  text-align: center;
  margin-top: 2rem;
`;
