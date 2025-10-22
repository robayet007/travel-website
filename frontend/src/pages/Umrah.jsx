import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Umrah = () => {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await axios.get('https://travel-website-khaki-three.vercel.app/api/products/category/holy-umrah-hajj')
      setPackages(response.data.data)
    } catch (error) {
      console.error('Error fetching packages:', error)
    }
  }

  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">Umrah Packages</h1>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map(pkg => (
            <div key={pkg._id} className="p-6 bg-gray-800 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">{pkg.title}</h3>
              <div className="flex gap-4 mb-3">
                <span className="text-gray-400 line-through">${pkg.price}</span>
                <span className="font-bold text-green-400">${pkg.offerPrice}</span>
              </div>
              <ul className="text-gray-300">
                {pkg.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {packages.length === 0 && (
          <p className="mt-8 text-center text-gray-400">No Umrah packages available yet</p>
        )}
      </div>
    </div>
  )
}

export default Umrah