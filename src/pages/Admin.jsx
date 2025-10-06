import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "12345") {
      setIsLoggedIn(true);
      navigate("/admin/umrah"); // default page
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setForm({ username: "", password: "" });
  };

  const menuItems = [
    { name: "Umrah", path: "/admin/umrah" },
    { name: "Hajj", path: "/admin/hajj" },
    { name: "International", path: "/admin/international" },
    { name: "Domestic", path: "/admin/domestic" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gray-950">
        <form
          onSubmit={handleLogin}
          className="p-8 text-center bg-gray-900 shadow-lg rounded-2xl w-80"
        >
          <h2 className="mb-6 text-2xl font-semibold">Admin Login</h2>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 mb-4 bg-gray-800 rounded focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 mb-4 bg-gray-800 rounded focus:outline-none"
          />
          <button className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen text-white bg-gray-950">
      {/* Sidebar */}
      <aside
        className="flex flex-col justify-between p-6 bg-gray-900"
        style={{ width: '250px' }}
      >
        <div>
          <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block w-full px-4 py-2 mb-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-8 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
