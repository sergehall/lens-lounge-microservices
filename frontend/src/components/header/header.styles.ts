import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: white;
  max-width: 1300px;
`;

// Styled <a> for HeaderLink
export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px; /* Add spacing between logo and title */
  box-shadow: ${({ theme }) => theme.header.logoBoxShadow};
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.stance.logoBackgroundB4B};
    box-shadow: none;
  }

  @media (max-width: 1000px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const Logo = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  animation: appLogoSpin infinite 10s linear;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @keyframes appLogoSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  white-space: nowrap;
  text-align: left;
  color: ${({ theme }) => theme.links.color};
  font-family: 'Didot', 'Baskerville', 'Georgia', serif;

  &:hover {
    color: ${({ theme }) => theme.links.color};
  }

  @media (max-width: 1000px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
