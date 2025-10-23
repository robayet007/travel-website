import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hajj() {
  const [umrahPackages, setUmrahPackages] = useState([]);
  const [hajjPackages, setHajjPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ API Base URL Change - Vercel backend
  const API_BASE = 'https://travel-website-khaki-three.vercel.app';

  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        
        // ✅ URL Change - Vercel backend থেকে data fetch
        // Fetch Umrah packages
        const umrahResponse = await axios.get(`${API_BASE}/api/products/category/holy-umrah-hajj`);
        setUmrahPackages(umrahResponse.data.data);
        
        
        // ✅ URL Change - Vercel backend থেকে data fetch  
        // Fetch Hajj packages  
        const hajjResponse = await axios.get(`${API_BASE}/api/products/category/holy-hajj`);
        setHajjPackages(hajjResponse.data.data);
        
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // ==================== CARD COMPONENT ====================
  const PackageCard = ({ pkg }) => (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
      <div>
        {/* Image Section */}
        <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
          {pkg.image ? (
            <img
              // ✅ Image URL Change - Vercel backend থেকে image load
              src={`${API_BASE}${pkg.image}`}
              alt={pkg.title}
              className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
              }}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-300">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {pkg.title}
        </h3>
        
        {/* Prices - API data use করবে */}
        <div className="mt-4 text-center">
          <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">
            ৳{pkg.price}
          </span>
          <span className="ml-3 text-[2rem] font-extrabold text-orange-600">
            ৳{pkg.offerPrice}
          </span>
        </div>
        
        {/* Features - API data use করবে */}
        <ul className="mt-6 space-y-2 text-gray-700">
          {pkg.features && pkg.features.slice(0, 6).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">✅</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Book Now Button */}
      <Link
        to="/contact"
        className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.05]"
      >
        Book Now
      </Link>
    </div>
  );

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading packages...</div>
      </div>
    );
  }

  // ==================== RETURN ====================
  return (
    <>
      <section className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl">
        {/* Umrah Section */}
        <div className="mb-12 text-center">
          <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Umrah Packages
          </h1>
        </div>

        {umrahPackages.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {umrahPackages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">No Umrah packages available yet</p>
            <p className="mt-2 text-gray-500">Check back later for amazing Umrah packages</p>
          </div>
        )}

        {/* Hajj Section */}
        <div className="mt-16 mb-12 text-center">
          <h2 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Hajj Packages
          </h2>
        </div>

        {hajjPackages.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hajjPackages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">No Hajj packages available yet</p>
            <p className="mt-2 text-gray-500">Check back later for amazing Hajj packages</p>
          </div>
        )}
      </section>

      {/* Agency Info */}
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto my-12 overflow-hidden bg-white shadow-2xl h-80 rounded-xl">
        <img
          src="/agency-info.jpg"
          alt="Agency Info"
          className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-[1.05]"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400?text=Travel+Agency';
          }}
        />
      </div>
    </>
  );
}