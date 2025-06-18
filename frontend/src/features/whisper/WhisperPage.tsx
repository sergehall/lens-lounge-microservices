// frontend/src/features/whisper/WhisperPage.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserQuery } from '@/features/api/apiSlice';
import { WHISPER_ROUTES } from '@/routes/route-definitions/whisper.routes';

const WhisperPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetUserQuery();

  useEffect(() => {
    if (!isLoading && user) {
      navigate(WHISPER_ROUTES.chatsRoot);
    }
  }, [user, isLoading, navigate]);

  return null;
};

export default WhisperPage;
