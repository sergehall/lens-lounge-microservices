import React from 'react';

import * as S from './UnauthenticatedLanding.styles';

interface Props {
  title: string;
  description: string;
  warning: string;
  onSignIn: () => void;
  onCreateAccount: () => void;
}

/**
 * UnauthenticatedLanding is shown to unauthenticated users
 * visiting features like Whisper or Showcase. Encourages SIGN IN or CREATE ACCOUNT to proceed.
 */
const UnauthenticatedLanding: React.FC<Props> = ({
  title,
  description,
  warning,
  onSignIn,
  onCreateAccount,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {warning && <S.Warning>{warning}</S.Warning>}
        <S.ActionButtonsWrapper>
          <S.ActionButton onClick={onSignIn}>SIGN IN</S.ActionButton>
          <S.DividerText>
            <span>or</span>
          </S.DividerText>
          <S.ActionButton onClick={onCreateAccount}>CREATE ACCOUNT</S.ActionButton>
        </S.ActionButtonsWrapper>
      </S.Content>
    </S.Container>
  );
};

export default UnauthenticatedLanding;
