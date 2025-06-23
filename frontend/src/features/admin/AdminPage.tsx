import { Navigate } from 'react-router-dom';

import AdminPanel from './AdminPanel';

import { useAuth } from '@/api/hooks/useAuth';

const AdminPage = () => {
  const { user, userLoading } = useAuth(); // ✅ Ensure correct state names

  if (userLoading) return <p>Loading...</p>; // ✅ Fix loading state
  if (!user) return <Navigate to="/signin" replace />; // ✅ Redirect to correct route

  return (
    <div className="container mx-auto p-6">
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
