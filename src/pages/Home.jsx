// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-gray-800 bg-white">

      {/* Hero Section */}
      

      {/* Popular Destinations */}
      {/* Popular Destinations */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl px-4 mx-auto">
    <h2 className="mb-12 text-3xl font-bold text-center">Popular Destinations</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          name: 'Santorini, Greece',
          img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Santorini_Thira.jpg',
        },
        {
          name: 'Kyoto, Japan',
          img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Kiyomizu-dera_Temple%2C_Kyoto%2C_Japan.jpg',
        },
        {
          name: 'Paris, France',
          img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
        },
        {
          name: 'Bali, Indonesia',
          img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pura_Ulun_Danu_Bratan%2C_Bali%2C_Indonesia.jpg',
        },
        {
          name: 'Swiss Alps',
          img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Matterhorn_from_Domh%C3%BCtte_-_2.jpg',
        },
        {
          name: 'New York City',
          img: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Manhattan_at_Dusk_by_slonecker.jpg',
        },
      ].map((item, index) => (
        <div key={index} className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg">
          <img src={item.img} alt={item.name} className="object-cover w-full h-48" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 text-left md:grid-cols-3">
            {[
              { title: '1. Search & Discover', desc: 'Browse from hundreds of destinations, themes, and experiences.' },
              { title: '2. Plan & Book', desc: 'Customize your trip and book with our secure platform.' },
              { title: '3. Travel & Enjoy', desc: 'Embark on your journey, stress-free and full of excitement!' }
            ].map((step, index) => (
              <div key={index} className="p-6 transition bg-gray-100 rounded-md shadow hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 text-white bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Why Travel With TravelWave?</h2>
          <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
            {[
              '🌍 Unique Local Routes',
              '📅 Flexible Booking Options',
              '🤝 Trusted by 10k+ Travelers',
              '💬 24/7 Travel Support',
              '🌱 Eco-Friendly Tours',
              '🛡️ Safe & Secure Payments'
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md bg-white/10">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Your next adventure starts here</h2>
        <p className="mb-6 text-gray-600">Let TravelWave help you create unforgettable memories today.</p>
        <Link to="/contact" className="px-6 py-3 font-semibold text-white transition bg-purple-700 rounded-md shadow hover:bg-purple-800">
          Plan a Trip
        </Link>
      </section>
    </div>
  )
}
