import React, { useState } from "react";

const Umrah = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: "",
    discountPrice: "",
    image: "",
  });

  // Handle text input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle image upload
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
    setForm({ title: "", price: "", discountPrice: "", image: "" });
    setShowForm(false);
  };

  const handleRemove = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div className="min-h-screen p-4 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 md:p-8">
      <div className="flex flex-col items-center justify-between mb-6 space-y-4 sm:flex-row sm:space-y-0">
        <h1 className="text-3xl font-extrabold tracking-wide text-center sm:text-left">
          🕋 Umrah Packages
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          + Add Package
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 space-y-3 bg-gray-900 border border-gray-700 rounded-lg shadow-lg sm:w-[90%]">
            <h2 className="mb-4 text-2xl font-bold text-center text-green-400">
              Add Umrah Package
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
              type="text"
              name="price"
              placeholder="Price (e.g. $999)"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="discountPrice"
              placeholder="Discount Price"
              value={form.discountPrice}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 mb-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Drag & Drop / Upload */}
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
                onClick={() => setShowForm(false)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Package Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {packages.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No packages added yet.
          </p>
        )}

        {packages.map((pkg) => (
          <div
            key={pkg.id}
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
              <button
                onClick={() => handleRemove(pkg.id)}
                className="w-full px-3 py-2 mt-3 font-semibold text-white transition bg-red-600 rounded hover:bg-red-700"
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
