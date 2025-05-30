import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  position: relative;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
`;

export const UserName = styled(Link)`
  color: ${({ theme }) => theme.text.white};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.links.hoverColor};
  }
`;

export const DotSeparator = styled.span`
  color: ${({ theme }) => theme.text.light};
`;

export const TimeAgo = styled.span`
  color: ${({ theme }) => theme.text.light};
`;

export const EllipsisButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2px 6px;
  color: ${({ theme }) => theme.text.white};

  &:hover {
    color: ${({ theme }) => theme.links.hoverColor};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #1c1c1e;
  border-radius: 10px;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(40, 44, 52, 0.2);
  z-index: 10;
  min-width: 200px;
`;

export const MenuItem = styled.div<{ red?: boolean }>`
  padding: 12px 16px;
  color: ${({ red }) => (red ? '#ef4444' : '#fff')};
  font-weight: ${({ red }) => (red ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
