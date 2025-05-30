import styled from 'styled-components';

import { AvatarSize } from './enums/avatarSize.enum';

export const InfoSection = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.box.boxShadowNeon};
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

export const UserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img<{ $isActive: boolean; $size: AvatarSize }>`
  width: ${({ theme, $size }) => theme.avatarSizes[$size]};
  height: ${({ theme, $size }) => theme.avatarSizes[$size]};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.highlights.white : theme.global.semiTransparentBorder};

  @media (max-width: 600px) {
    width: ${({ theme }) => theme.avatarSizes[AvatarSize.Medium]};
    height: ${({ theme }) => theme.avatarSizes[AvatarSize.Medium]};
    margin-bottom: 10px;
  }
`;

export const UserName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 10px;
`;

export const UserStatus = styled.span<{ $isOnline: boolean }>`
  font-size: ${({ $isOnline }) => ($isOnline ? '1rem' : '0.85rem')};
  color: ${({ $isOnline, theme }) =>
    $isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
  line-height: 1rem;
  padding-left: 10px;
`;

export const UserInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border.borderColor};
  padding-bottom: 6px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DetailLabel = styled.div`
  font-weight: bold;
  min-width: 100px;
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
`;

export const DetailValue = styled.div`
  flex: 1;
  font-style: italic;
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  word-break: break-word;
  overflow-wrap: anywhere;
`;
