import React from 'react';

import { PrimaryButton } from './button.styles';

const Button: React.FC<{ primary?: boolean }> = ({ primary = false }) => {
  return <PrimaryButton primary={primary}>Click Me</PrimaryButton>;
};

export default Button;
