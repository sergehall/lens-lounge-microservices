import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 12px;
  padding: 5px 20px;
  color: ${({ theme }) => theme.text.white};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  height: ${({ theme }) => theme.tile.height};
`;

export const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const CategoryNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large40};
  background-color: ${({ theme }) => theme.global.secondaryColor};
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  min-height: 300px;
`;
