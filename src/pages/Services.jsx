import React from 'react'
import { FaGlobe, FaPlaneDeparture, FaHotel, FaRoute, FaPassport, FaHeadset } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaPlaneDeparture className="mb-4 text-3xl text-purple-700" />,
      title: 'Flight Booking',
      desc: 'We offer the best deals on domestic and international flights with top airlines.',
    },
    {
      icon: <FaHotel className="mb-4 text-3xl text-purple-700" />,
      title: 'Hotel Reservations',
      desc: 'Book top-rated hotels, resorts, and villas at affordable prices anywhere in the world.',
    },
    {
      icon: <FaRoute className="mb-4 text-3xl text-purple-700" />,
      title: 'Custom Tour Packages',
      desc: 'Fully customized travel packages tailored to your dream destination and style.',
    },
    {
      icon: <FaGlobe className="mb-4 text-3xl text-purple-700" />,
      title: 'Global Destinations',
      desc: 'Access to curated experiences and adventures in over 100+ countries.',
    },
    {
      icon: <FaPassport className="mb-4 text-3xl text-purple-700" />,
      title: 'Visa Assistance',
      desc: 'Complete guidance on visa applications, documentation, and appointment scheduling.',
    },
    {
      icon: <FaHeadset className="mb-4 text-3xl text-purple-700" />,
      title: '24/7 Travel Support',
      desc: 'We’re with you every step of the way — before, during, and after your journey.',
    },
  ]

  return (
    <div className="min-h-screen px-4 py-16 text-gray-800 bg-gray-50">
      {/* Intro */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            Our Travel Services
          </span>
        </h1>
        <p className="text-gray-600">
          Discover what we offer to make your trip unforgettable — from booking to landing back home.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="p-6 text-center transition bg-white rounded-lg shadow hover:shadow-md">
            {service.icon}
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to plan your perfect trip?</h2>
        <a
          href="/contact"
          className="inline-block px-6 py-3 font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
        >
          Contact Us Now
        </a>
      </div>
    </div>
  )
}
