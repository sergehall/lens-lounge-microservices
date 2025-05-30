import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px; /* Padding applied inside the container */
  background-color: ${({ theme }) => theme.header.navBg};
  border-radius: 8px; /* Optional for rounded corners */
  box-sizing: border-box; /* Includes padding and border in the element’s dimensions */
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 8px;
    width: 100%;
  }
`;

export const SidebarItem = styled.li`
  display: flex;
`;

export const SidebarLink = styled.div<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme, $isActive }) => ($isActive ? theme.links.activeText : theme.links.color)};
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.95rem;
  line-height: 1.8;
  display: inline-block;
  width: 100%;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.links.activeBg : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme.links.hoverBg};
    color: ${({ theme }) => theme.links.hoverColor};
    box-shadow: 0 0 5px 2px rgba(97, 218, 251, 0.7);
    transform: scale(1.05); /* Slight zoom effect */
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 5px 8px;
  }
`;
