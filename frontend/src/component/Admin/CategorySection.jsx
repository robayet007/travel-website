import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategorySection = ({ category }) => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    offerPrice: '',
    features: [''],
    image: null
  });

  // Fetch packages by category
  const fetchPackages = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/category/${category.value}`);
      setPackages(response.data.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPackages();
    setShowForm(false);
    setEditingPackage(null);
    setFormData({ 
      title: '', 
      price: '', 
      offerPrice: '', 
      features: [''],
      image: null 
    });
  }, [category.value]);

  // Add new feature field
  const addFeatureField = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  // Update feature value - automatically add checkmark
  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features];
    
    // যদি value এর শুরুতে ✅ না থাকে, তাহলে add করবে
    if (value.trim() && !value.startsWith('✅')) {
      newFeatures[index] = '✅ ' + value;
    } else {
      newFeatures[index] = value;
    }
    
    setFormData({ ...formData, features: newFeatures });
  };

  // Remove feature
  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', category.value);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('offerPrice', formData.offerPrice);
      formDataToSend.append('features', JSON.stringify(
        formData.features.filter(feature => feature && feature.trim() !== '')
      ));
      
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      if (editingPackage) {
        await axios.put(`http://localhost:5000/api/products/${editingPackage._id}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Package updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/products', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Package added successfully!');
      }

      setShowForm(false);
      setEditingPackage(null);
      setFormData({ 
        title: '', 
        price: '', 
        offerPrice: '', 
        features: [''],
        image: null 
      });
      fetchPackages();
    } catch (error) {
      console.error('Error saving package:', error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  // Edit package
  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      title: pkg.title,
      price: pkg.price,
      offerPrice: pkg.offerPrice,
      features: pkg.features.length > 0 ? pkg.features : [''],
      image: null
    });
    setShowForm(true);
  };

  // Cancel edit
  const handleCancel = () => {
    setShowForm(false);
    setEditingPackage(null);
    setFormData({ 
      title: '', 
      price: '', 
      offerPrice: '', 
      features: [''],
      image: null 
    });
  };

  // Delete package
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchPackages();
        alert('Package deleted successfully!');
      } catch (error) {
        console.error('Error deleting package:', error);
        alert('Error deleting package!');
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Clean Header - Only category name */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
        >
          {showForm ? 'Cancel' : 'Add Package'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 mb-6 border rounded-lg bg-gray-50">
          <h4 className="mb-4 text-lg font-semibold text-gray-800">
            {editingPackage ? 'Edit Package' : 'Add New Package'}
          </h4>
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Package Title *</label>
              <input
                type="text"
                placeholder="Enter package title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Category</label>
              <div className="w-full px-3 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-md">
                {category.name}
              </div>
            </div>
            
            {/* Image Upload Field */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Package Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formData.image && (
                <p className="mt-1 text-sm text-green-600">
                  Selected: {formData.image.name}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Price *</label>
                <input
                  type="number"
                  placeholder="Regular price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Offer Price *</label>
                <input
                  type="number"
                  placeholder="Discounted price"
                  value={formData.offerPrice}
                  onChange={(e) => setFormData({ ...formData, offerPrice: e.target.value })}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Package Features</label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Feature ${index + 1}`}
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-3 py-2 text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFeatureField}
              className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Add Feature
            </button>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
            >
              {editingPackage ? 'Update Package' : 'Add Package'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-white transition duration-200 bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Packages List - Grid Layout */}
      <div>
        {packages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg._id} className="overflow-hidden transition duration-200 bg-white border rounded-lg shadow-md hover:shadow-lg">
                {/* Image Section */}
                <div className="h-48 overflow-hidden bg-gray-200">
                  {pkg.image ? (
                    <img 
                      src={`http://localhost:5000${pkg.image}`} 
                      alt={pkg.title}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        console.log('Image failed to load:', pkg.image);
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-300">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h4 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2">{pkg.title}</h4>
                  
                  {/* Prices - Taka (৳) mark */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-gray-500 line-through">৳{pkg.price}</span>
                    <span className="text-lg font-bold text-green-600">৳{pkg.offerPrice}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {pkg.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{pkg.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3 border-t">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-500">No packages available</p>
            <p className="mt-1 text-sm text-gray-400">Click "Add Package" to create your first package</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;