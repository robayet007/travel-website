import React, { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/umrah",
});

const Umrah = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editPackage, setEditPackage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price: "",
    discountPrice: "",
    image: "",
  });

  // Fetch packages
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await API.get("/");
        setPackages(res.data);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };
    fetchPackages();
  }, []);

  // Handle input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  };

  // Drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  };

  // Save new package
  const handleSave = async () => {
    if (!form.title || !form.price || !form.image) {
      alert("Title, Price, and Image are required!");
      return;
    }
    try {
      const res = await API.post("/", form);
      setPackages([...packages, res.data]);
      setForm({ title: "", price: "", discountPrice: "", image: "" });
      setShowForm(false);
    } catch (err) {
      console.log("Save error:", err);
    }
  };

  // Update package
  const handleUpdate = async () => {
    if (!form.title || !form.price || !form.image) {
      alert("Title, Price, and Image are required!");
      return;
    }
    try {
      const res = await API.put(`/${editPackage._id}`, form);
      setPackages(
        packages.map((pkg) => (pkg._id === editPackage._id ? res.data : pkg))
      );
      setEditPackage(null);
      setForm({ title: "", price: "", discountPrice: "", image: "" });
      setShowForm(false);
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  // Delete package
  const handleRemove = async (_id) => {
    try {
      await API.delete(`/${_id}`);
      setPackages(packages.filter((pkg) => pkg._id !== _id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // Open Edit modal
  const handleEdit = (pkg) => {
    setEditPackage(pkg);
    setForm({
      title: pkg.title,
      price: pkg.price,
      discountPrice: pkg.discountPrice,
      image: pkg.image,
    });
    setShowForm(true);
  };

  return (
    <div className="min-h-screen p-4 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 md:p-8">
      <div className="flex flex-col items-center justify-between mb-6 space-y-4 sm:flex-row sm:space-y-0">
        <h1 className="text-3xl font-extrabold tracking-wide text-center sm:text-left">
          🕋 Umrah Packages
        </h1>
        <button
          type="button"
          onClick={() => {
            setForm({ title: "", price: "", discountPrice: "", image: "" });
            setEditPackage(null);
            setShowForm(true);
          }}
          className="px-6 py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          + Add Package
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 space-y-3 bg-gray-900 border border-gray-700 rounded-lg shadow-lg sm:w-[90%]">
            <h2 className="mb-4 text-2xl font-bold text-center text-green-400">
              {editPackage ? "Update Package" : "Add Umrah Package"}
            </h2>

            <input
              type="text"
              name="title"
              placeholder="Package Title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="discountPrice"
              placeholder="Discount Price"
              value={form.discountPrice}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
            />

            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex flex-col items-center justify-center w-full h-40 mb-3 overflow-hidden transition bg-gray-800 border-2 border-gray-600 border-dashed rounded hover:border-green-400"
            >
              {form.image ? (
                <img
                  src={form.image}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <label className="text-gray-400 cursor-pointer">
                  📷 Drag & Drop image or click to upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Cancel
              </button>
              {editPackage ? (
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Package Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {packages.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No packages yet.
          </p>
        )}

        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className="overflow-hidden transition transform bg-gray-800 rounded-2xl shadow-lg hover:scale-[1.03] hover:shadow-green-700/30"
          >
            {pkg.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            )}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-green-400">
                {pkg.title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-3">
                {pkg.discountPrice}
              </p>
              <p className="mt-1 text-lg font-bold text-yellow-400">
                {pkg.price}
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => handleEdit(pkg)}
                  className="flex-1 px-3 py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(pkg._id)}
                  className="flex-1 px-3 py-2 font-semibold text-white transition bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Umrah;
