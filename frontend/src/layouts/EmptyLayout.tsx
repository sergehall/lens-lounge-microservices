import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * A layout wrapper that renders nested routes via <Outlet />
 */
const EmptyLayout: React.FC = () => {
  return <Outlet />;
};

export default EmptyLayout;
