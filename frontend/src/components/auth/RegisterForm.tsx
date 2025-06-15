import React, { useState } from 'react';

import * as S from './authorization.styles';

export const RegisterForm = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: (email: string, username: string, password: string) => void;
  isLoading?: boolean;
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, username, password);
      }}
    >
      <S.InputField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.InputField
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <S.InputField
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.DropdownButton type="submit" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create Account'}
      </S.DropdownButton>
    </form>
  );
};
