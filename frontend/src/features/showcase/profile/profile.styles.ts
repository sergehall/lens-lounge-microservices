import styled from 'styled-components';

// Main profile container
export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 5px;
  background-color: ${({ theme }) => theme.global.secondaryColor};
  margin-bottom: ${({ theme }) => theme.spacing.default};
  color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

// Profile photo styling
export const ProfilePhoto = styled.img`
  width: ${({ theme }) => theme.profile.photoSize};
  height: ${({ theme }) => theme.profile.photoSize};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: ${({ theme }) => theme.profile.detailsGap};
  padding-top: ${({ theme }) => theme.profile.detailsPadding};
  box-sizing: border-box;
`;

// Profile field container
export const ProfileField = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.profile.fieldGap};
`;

// Profile label styling
export const ProfileLabel = styled.span`
  font-weight: bold;
`;

// Profile value styling
export const ProfileValue = styled.span`
  a {
    color: ${({ theme }) => theme.header.navBg};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.links.hoverColor};
      text-decoration: underline;
    }
  }
`;
