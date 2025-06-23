// frontend/src/features/showcase/profile/Profile.tsx
import React from 'react';

import * as S from './profile.styles';

import { useAuth } from '@/api/hooks/useAuth';

const Profile: React.FC = () => {
  const { user: profile } = useAuth();

  if (!profile) {
    return (
      <S.ProfileContainer>
        <h2>No profile data available.</h2>
      </S.ProfileContainer>
    );
  }

  const renderWebsite = () => {
    if (!profile.website) {
      return <span>Not available</span>;
    }
    return (
      <a href={profile.website} target="_blank" rel="noopener noreferrer">
        {profile.website}
      </a>
    );
  };

  return (
    <S.ProfileContainer>
      <S.ProfilePhoto
        src={profile.photoUrl}
        alt={`${profile.firstName} ${profile.lastName}'s profile`}
      />
      <S.ProfileDetails>
        <S.ProfileField>
          <S.ProfileLabel>Full name:</S.ProfileLabel>
          <S.ProfileValue>{`${profile.firstName} ${profile.lastName}`}</S.ProfileValue>
        </S.ProfileField>
        <S.ProfileField>
          <S.ProfileLabel>Birthday:</S.ProfileLabel>
          <S.ProfileValue>{profile.birthday}</S.ProfileValue>
        </S.ProfileField>
        <S.ProfileField>
          <S.ProfileLabel>Education:</S.ProfileLabel>
          <S.ProfileValue>{profile.education}</S.ProfileValue>
        </S.ProfileField>
        <S.ProfileField>
          <S.ProfileLabel>Website:</S.ProfileLabel>
          <S.ProfileValue>{renderWebsite()}</S.ProfileValue>
        </S.ProfileField>
      </S.ProfileDetails>
    </S.ProfileContainer>
  );
};

export default Profile;
