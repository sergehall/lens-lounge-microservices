// src/features/showcase/profile/Profile.tsx
import React from 'react';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectProfile } from '../../auth/authSlice';

import {
  ProfileContainer,
  ProfilePhoto,
  ProfileDetails,
  ProfileField,
  ProfileLabel,
  ProfileValue,
} from './profile.styles';

const Profile: React.FC = () => {
  const profile = useAppSelector(selectProfile);

  // If profile is null, render fallback
  if (!profile) {
    return (
      <ProfileContainer>
        <h2>No profile data available.</h2>
      </ProfileContainer>
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
    <ProfileContainer>
      {/* Profile Photo */}
      <ProfilePhoto
        src={profile.photoUrl}
        alt={`${profile.firstName} ${profile.lastName}'s profile`}
      />

      {/* Profile Details */}
      <ProfileDetails>
        <ProfileField>
          <ProfileLabel>Full name:</ProfileLabel>
          <ProfileValue>{`${profile.firstName} ${profile.lastName}`}</ProfileValue>
        </ProfileField>
        <ProfileField>
          <ProfileLabel>Birthday:</ProfileLabel>
          <ProfileValue>{profile.birthday}</ProfileValue>
        </ProfileField>
        <ProfileField>
          <ProfileLabel>Education:</ProfileLabel>
          <ProfileValue>{profile.education}</ProfileValue>
        </ProfileField>
        <ProfileField>
          <ProfileLabel>Website:</ProfileLabel>
          <ProfileValue>{renderWebsite()}</ProfileValue>
        </ProfileField>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
