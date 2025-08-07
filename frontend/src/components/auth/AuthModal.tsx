// frontend/src/components/auth/AuthModal.tsx

import React from 'react';

import * as S from './authorization.styles';

import { RegisterPanel } from '@/components/auth/RegisterPanel';
import SignInPanel from '@/components/auth/SignInPanel';

interface AuthModalProps {
  isVisible: boolean;
  mode: 'sign-in' | 'sign-up';
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, isVisible, mode }) => {
  if (!isVisible) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        {mode === 'sign-in' && <SignInPanel />}
        {mode === 'sign-up' && <RegisterPanel />}
        <S.DropdownButton onClick={onClose}>Close</S.DropdownButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default AuthModal;
