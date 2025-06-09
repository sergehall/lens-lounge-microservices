import React from 'react';

import { useAppSelector } from '@/hooks/reduxHooks';
import {
  selectIsAuthenticated,
  selectAuthError,
  selectAuthLoading,
  selectProfile,
} from '@/features/auth/authSlice';
import { isProfileValid } from '@/utils/guards/isProfileValid';

const StatusBanner: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const profile = useAppSelector(selectProfile);

  if (isLoading) {
    return <div>🔄 Logging in...</div>;
  }

  if (error === 'Network error') {
    console.error(
      '❌ Could not connect to the server. Make sure the server at http://localhost:... is running.'
    );
    return null; // do not display anything on the UI
  }

  if (error) {
    return <div style={{ color: 'red' }}>❌ {error}</div>;
  }

  if (isAuthenticated && isProfileValid(profile)) {
    console.log(`Logged in as: ${profile.login}`);
    return <div style={{ display: 'none' }}> Logged in as {profile.login}</div>;
  }

  return <div>🚫 Not logged in</div>;
};

export default StatusBanner;
