import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'QWER@#12') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;