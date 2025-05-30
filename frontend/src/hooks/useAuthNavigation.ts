// src/hooks/useAuthNavigation.ts
import { useNavigate } from 'react-router-dom';

const useAuthNavigation = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    console.log('Navigating to Sign In...');
    navigate('/signin'); // replace it with actual route
  };

  const handleCreateAccountClick = () => {
    console.log('Navigating to Create Account...');
    navigate('/signup'); // replace it with actual route
  };

  return { handleSignInClick, handleCreateAccountClick };
};

export default useAuthNavigation;
