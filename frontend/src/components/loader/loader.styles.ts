import styled from 'styled-components';

export const Spinner = styled.div`
  margin: 100px auto;
  border: 6px solid #eee;
  border-top: 6px solid #555;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
