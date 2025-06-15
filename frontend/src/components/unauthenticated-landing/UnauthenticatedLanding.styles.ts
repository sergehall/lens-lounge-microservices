import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container holds the entire guest landing UI.
 * Uses motion for entry animation.
 */
export const Container = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

export const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

/** Page title */
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

/** Description text below the title */
export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 500px;
`;

export const Warning = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.alert.warningColor};
  margin-top: 0.5rem;
`;

/**
 * Login button styled with motion effects.
 */
export const ActionButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}))`
  background: ${({ theme }) => theme.global.backgroundColor};
  color: ${({ theme }) => theme.links.color};
  border: 2px solid #61dafb;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  padding: 10px 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.box.boxShadowGlowOnSecondaryColor};
    color: ${({ theme }) => theme.links.hoverColor};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const DividerText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 8px 0;
  position: relative;

  &:before,
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    margin: 0 8px;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.global.backgroundColor};
    white-space: nowrap;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small10};
  margin-top: ${({ theme }) => theme.spacing.default};
`;
