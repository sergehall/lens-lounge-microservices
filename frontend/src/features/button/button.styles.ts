import styled from 'styled-components';

// Styled-component for the primary button
export const PrimaryButton = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${({ primary }) => (primary ? 'darkblue' : 'darkgray')};
  }
`;
