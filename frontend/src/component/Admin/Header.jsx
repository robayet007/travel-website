import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/admin/login');
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white transition duration-200 bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;