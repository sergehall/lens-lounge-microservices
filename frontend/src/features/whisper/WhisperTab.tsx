import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { label: 'Chats', path: '/whisper/chat' },
  { label: 'Contacts', path: '/whisper/contacts' },
];

const WhisperTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex gap-2 p-2 bg-background/40 rounded-xl shadow-inner border border-border mb-4">
      {tabs.map((tab) => {
        const isActive = location.pathname.startsWith(tab.path);

        return (
          <button
            key={tab.path}
            onClick={() => handleTabClick(tab.path)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-150 border 
              ${isActive ? 'bg-primary text-white border-primary' : 'bg-background border-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default WhisperTabs;
