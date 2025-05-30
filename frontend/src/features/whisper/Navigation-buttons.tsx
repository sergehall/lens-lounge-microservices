// src/features/whisper/Navigation-buttons.tsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { WHISPER_ROUTES } from '../../routes/route-definitions/whisper.routes';

import { ButtonSegment, TabButton, ActiveIndicator } from './navigationButtons.styles';

const tabs = [
  { label: 'Chats', path: WHISPER_ROUTES.chatsRoot },
  { label: 'Contacts', path: WHISPER_ROUTES.contactsRoot },
];

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ButtonSegment>
      {tabs.map(({ label, path }) => {
        const isActive = currentPath.startsWith(path);

        return (
          <TabButton key={path} onClick={() => navigate(path)} $active={isActive}>
            {label}
            {isActive && (
              <ActiveIndicator
                layoutId="tab-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </TabButton>
        );
      })}
    </ButtonSegment>
  );
};

export default NavigationButtons;
