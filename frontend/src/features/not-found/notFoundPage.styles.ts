// src/features/not-found/notFoundPage.styles.ts

import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
    0% { text-shadow: 2px 2px #00f0ff; }
    20% { text-shadow: -2px -2px #61dafb; }
    40% { text-shadow: 2px -2px #00f0ff; }
    60% { text-shadow: -2px 2px #61dafb; }
    80% { text-shadow: 0 0 10px #00f0ff; }
    100% { text-shadow: 0 0 5px #61dafb; }
`;

export const Container = styled.div`
  text-align: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  color: #f0faff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Glow404 = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.global.secondaryColor};
  margin-bottom: 0.5rem;
  animation: ${glitch} 2.5s infinite;
`;

export const Tagline = styled.h2`
  font-size: 1.8rem;
  color: #61dafb;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #c0d3e8;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #00f0ff;
  border: 2px solid #00f0ff;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: #00f0ff;
    color: #1c1c28;
    box-shadow:
      0 0 10px #00f0ff,
      0 0 20px #61dafb;
  }
`;
