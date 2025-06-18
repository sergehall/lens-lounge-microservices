import React from 'react';

import { useGetUserQuery } from '@/features/api/apiSlice';

const AdminPanel = () => {
  const { data: user, isLoading, error } = useGetUserQuery();

  if (isLoading) return <p>Loading user data...</p>;
  if (error || !user) return <p>Error fetching user data</p>;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Admin Panel - Profile Info</h2>
      <p>
        <strong>Login:</strong> {user.login}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {/* Можно отобразить и другие поля, если есть */}
    </div>
  );
};

export default AdminPanel;
