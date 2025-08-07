// frontend/src/features/whisper/WhisperPage.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/context/AuthContext';
import { WHISPER_ROUTES } from '@/routes/route-definitions/whisper.routes';

const WhisperPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated && user?.userId) {
      navigate(WHISPER_ROUTES.chatsRoot);
    }
  }, [isAuthenticated, user, navigate]);

  return null;
};

export default WhisperPage;
