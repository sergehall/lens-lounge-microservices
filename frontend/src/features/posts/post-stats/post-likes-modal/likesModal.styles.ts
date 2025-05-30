import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 80vh;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 12px;
  color: ${({ theme }) => theme.text.white};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 16px;
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.global.transparentBorder};
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.white};
  font-size: 1.4rem;
  cursor: pointer;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.global.transparentBorder};
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text.white};
  font-size: 0.95rem;
`;

export const RealName = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.muted};
`;

export const FollowButton = styled.button`
  background-color: ${({ theme }) => theme.buttons.primaryBg};
  color: ${({ theme }) => theme.buttons.primaryText};
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttons.primaryHoverBg};
  }
`;
