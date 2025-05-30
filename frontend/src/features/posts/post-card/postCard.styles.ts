import styled from 'styled-components';

export const Card = styled.article`
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.global.transparentBorder};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.white};
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.white};
  margin: 0;
`;

export const Metadata = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.muted};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Content = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text.white};
  margin: 0;
`;
