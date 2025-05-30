import styled from 'styled-components';

import theme from '../themes/theme';

export const AppContainer = styled.div`
  display: grid;
  grid-gap: ${theme.spacing.default};
  grid-template-columns: 150px 1fr; /* Sidebar fixed at 150px, content takes remaining space */
  grid-template-rows: auto 1fr; /* Header takes auto height, sidebar & content fill remaining height */
  grid-template-areas:
    'App-header App-header'
    'App-nav App-content';
  height: 100vh;
  max-width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacing.default};
    grid-template-rows: auto auto 1fr; /* Header and sidebar take auto height, content fills rest */
    grid-template-areas:
      'App-header'
      'App-nav'
      'App-content';
    max-width: 100%;
  }
`;

export const AppHeader = styled.header`
  grid-area: App-header;
  width: 100%;
  background-color: ${theme.header.navBg};
  box-shadow: 0 4px 8px ${theme.global.transparentBorder};
  padding: ${theme.spacing.default};
`;

export const AppSidebar = styled.nav`
  grid-area: App-nav;
  background-color: ${({ theme }) => theme.header.navBg};
  border-right: 1px solid ${({ theme }) => theme.global.semiTransparentBorder};
  height: 100%; /* Make sure sidebar fills height */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    height: auto; /* Adjust height for mobile */
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.global.semiTransparentBorder};
  }
`;

export const AppContent = styled.main`
  grid-area: App-content;
  background-color: ${theme.global.secondaryColor};
  padding: ${theme.spacing.default};
  height: 100%;
  overflow-y: auto;
`;
