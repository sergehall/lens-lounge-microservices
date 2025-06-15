// frontend/src/components/auth/SignInForm.tsx
import React, { useState } from 'react';

import * as S from './authorization.styles';

interface AuthFormProps {
  onSubmit: (identifier: string, password: string) => void;
  isLoading?: boolean;
}

export const SignInForm: React.FC<AuthFormProps> = ({ onSubmit, isLoading }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(identifier, password);
      }}
    >
      <S.InputField
        placeholder="Email or Username"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <S.InputField
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.DropdownButton type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </S.DropdownButton>
    </form>
  );
};
