import styled from 'styled-components';

export const PostWrapper = styled.article`
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.box.boxShadowBackgroundColor};
  max-width: 600px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.default};
`;
