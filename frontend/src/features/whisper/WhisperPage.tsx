import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/reduxHooks';
import { WHISPER_ROUTES } from '../../routes/route-definitions/whisper.routes';
import { selectIsAuthenticated } from '../auth/authSlice';

const WhisperPage: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(WHISPER_ROUTES.chatsRoot);
    }
  }, [isAuthenticated, navigate]);

  return null; // We don't render anything, since we only redirect it
};

export default WhisperPage;
