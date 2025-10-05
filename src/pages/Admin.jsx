import React, { useState } from "react";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("services");

  // demo service data
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Air Ticket Booking",
      price: "৳15000",
      image: "https://via.placeholder.com/150",
      description: "We offer best deals for air ticket bookings worldwide.",
    },
    {
      id: 2,
      title: "Hotel Reservation",
      price: "৳5000",
      image: "https://via.placeholder.com/150",
      description: "Affordable hotel booking for domestic and international tours.",
    },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setForm({ username: "", password: "" });
  };

  const handleServiceChange = (id, field, value) => {
    const updated = services.map((srv) =>
      srv.id === id ? { ...srv, [field]: value } : srv
    );
    setServices(updated);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gray-950">
      {!isLoggedIn ? (
        // ===== LOGIN SECTION =====
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
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      ) : (
        // ===== DASHBOARD SECTION =====
        <div className="flex w-full min-h-screen">
          {/* ===== SIDEBAR ===== */}
          <aside className="flex flex-col justify-between w-64 p-6 bg-gray-900">
            <div>
              <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
              <nav className="space-y-3">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeTab === "services"
                      ? "bg-blue-600"
                      : "hover:bg-gray-800"
                  }`}
                >
                  🧾 Services
                </button>
                <button
                  onClick={() => setActiveTab("director")}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeTab === "director"
                      ? "bg-blue-600"
                      : "hover:bg-gray-800"
                  }`}
                >
                  👨‍💼 Director Update
                </button>
                <button
                  onClick={() => setActiveTab("packages")}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeTab === "packages"
                      ? "bg-blue-600"
                      : "hover:bg-gray-800"
                  }`}
                >
                  🎒 Package Update
                </button>
              </nav>
            </div>

            <button
              onClick={handleLogout}
              className="px-4 py-2 mt-8 bg-red-600 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="flex-1 p-10 bg-gray-950">
            {activeTab === "services" && (
              <>
                <h2 className="mb-6 text-3xl font-semibold">Manage Services</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="p-6 bg-gray-900 shadow-lg rounded-xl"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-40 mb-4 rounded"
                      />
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) =>
                          handleServiceChange(
                            service.id,
                            "title",
                            e.target.value
                          )
                        }
                        className="w-full p-2 mb-3 bg-gray-800 rounded"
                      />
                      <input
                        type="text"
                        value={service.price}
                        onChange={(e) =>
                          handleServiceChange(
                            service.id,
                            "price",
                            e.target.value
                          )
                        }
                        className="w-full p-2 mb-3 bg-gray-800 rounded"
                      />
                      <input
                        type="text"
                        value={service.image}
                        onChange={(e) =>
                          handleServiceChange(
                            service.id,
                            "image",
                            e.target.value
                          )
                        }
                        className="w-full p-2 mb-3 bg-gray-800 rounded"
                      />
                      <textarea
                        value={service.description}
                        onChange={(e) =>
                          handleServiceChange(
                            service.id,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full h-24 p-2 mb-4 bg-gray-800 rounded"
                      />
                      <button className="w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700">
                        Save Changes
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "director" && (
              <div>
                <h2 className="mb-4 text-3xl font-semibold">Director Update</h2>
                <p className="text-gray-400">
                  এখানে তুমি Director এর নাম, ছবি, পদবি ইত্যাদি আপডেট করতে পারবে।
                </p>
              </div>
            )}

            {activeTab === "packages" && (
              <div>
                <h2 className="mb-4 text-3xl font-semibold">Package Update</h2>
                <p className="text-gray-400">
                  এখানে তুমি Tour Package এর তথ্য আপডেট করতে পারবে।
                </p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default Admin;

