import React, { useState } from "react";

const Umrah = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", price: "", description: "", image: "" });

  // Handle text input
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Handle file input
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setForm({ ...form, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setForm({ ...form, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!form.title || !form.price) {
      alert("Title and Price are required");
      return;
    }
    setPackages([...packages, { ...form, id: Date.now() }]);
    setForm({ title: "", price: "", description: "", image: "" });
    setShowForm(false);
  };

  const handleRemove = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div className="p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Umrah Packages</h1>

      {/* Add Package Button */}
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 mb-6 bg-green-600 rounded hover:bg-green-700"
      >
        + Add Package
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-gray-900 rounded-lg w-96">
            <h2 className="mb-4 text-xl font-semibold">Add Umrah Package</h2>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
            />

            {/* Drag & Drop / Upload */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex items-center justify-center w-full h-40 mb-3 overflow-hidden bg-gray-800 border-2 border-gray-500 border-dashed rounded cursor-pointer"
            >
              {form.image ? (
                <img src={form.image} alt="Preview" className="object-cover w-full h-full" />
              ) : (
                <label className="text-gray-400 cursor-pointer">
                  Drag & Drop image here or click to upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Added Packages */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.id} className="mx-auto overflow-hidden bg-gray-800 rounded-lg w-80">
            {pkg.image && (
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              <p className="font-medium text-green-400">{pkg.price}</p>
              <p>{pkg.description}</p>
              <button
                onClick={() => handleRemove(pkg.id)}
                className="px-3 py-1 mt-3 bg-red-600 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Umrah;
