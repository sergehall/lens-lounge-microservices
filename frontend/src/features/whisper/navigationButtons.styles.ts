// src/features/whisper/navigationButtons.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSegment = styled.div`
  display: flex;
  gap: 6px;
  position: sticky;
  bottom: 0;
  padding: 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  box-shadow: ${({ theme }) => theme.box.boxShadowNeon};
  border-radius: 8px;
  margin-top: 5px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  position: relative;
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.contacts.userBgActiveColor};
  color: ${({ theme }) => theme.text.softWhite};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};

  &:hover {
    background-color: ${({ theme }) => theme.dialogs.buttonHoverColor};
  }

  @media (max-width: 800px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.text.softWhite};
  border-radius: 2px 2px 0 0;
  box-shadow: 0 0 6px ${({ theme }) => theme.text.softWhite};
`;
