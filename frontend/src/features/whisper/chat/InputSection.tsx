// InputSection.tsx
import React from 'react';

import { InputSectionChat } from './chat.styles';

// Button components
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

interface IconButtonProps {
  onClick: () => void;
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <button onClick={onClick} aria-label="Icon Button">
      {icon}
    </button>
  );
};

// Main InputSection component
interface InputSectionProps {
  message: string;
  setMessage: (value: string) => void;
  handleSendMessage: () => void;
  handleUploadFile: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  message,
  setMessage,
  handleSendMessage,
  handleUploadFile,
}) => {
  return (
    <InputSectionChat>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <div className="button-group">
        <Button onClick={handleSendMessage}>Send</Button>
        <IconButton onClick={handleUploadFile} icon="📁" />
      </div>
    </InputSectionChat>
  );
};

export default InputSection;
