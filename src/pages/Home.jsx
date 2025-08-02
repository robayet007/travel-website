// src/pages/Home.jsx
import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import '../index.css'
import ContactRepresentatives from '../component/ContactRepresentatives'

export default function Home() {
  return (
    <div className="text-gray-800 bg-white">


      {/* testing */}
      <div className="max-w-lg p-8 mx-auto text-center animated-border-container font-new-family">
  <h2 className="mb-4 text-3xl font-bold flicker-text md:text-4xl">
    FLY EASY TOURS & TRAVELS
  </h2>
  <h4 className="text-xl italic flicker-subtext">
    "TRAVEL WITH EASY, AVOID HEALTH RISKS"
  </h4>
</div>







      {/* testing */}

      {/* Hero Section */}
     {/* <h2 className='p-2 font-new-family'>FLY EASY TOURS & TRAVELS</h2>
     <h4 className='p-2 font-new-family '>"TRAVEL WITH EASY, AVOID  HEALTH RISKS"</h4> */}
      <About/>

      {/* Popular Destinations */}
      {/* Popular Destinations */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl px-4 mx-auto">
    <h2 className="mb-12 text-3xl font-bold text-center">Popular Destinations</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          name: 'Holly Mecca Sharif',
          img: '/travel-website/makka.png',
        },
        {
          name: 'Dubai',
          img: '/travel-website/destination-02.png',
        },
        {
          name: 'Madina Sharif',
          img: '/travel-website/madina.png',
        },
        {
          name: 'New York , USA',
          img: '/travel-website/usa.png',
        },
        {
          name: 'Swiss Alps',
          img: '/travel-website/destination-05.jpg',
        },
        {
          name: 'Indonessia',
          img: '/travel-website/destination-01.jpg',
        },
      ].map((item, index) => (
        <div key={index} className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg">
          <img src={item.img} alt={item.name} className="object-cover w-full h-48 transition-transform duration-300 cursor-pointer hover:scale-110" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* How It Works */}
      {/* <section className="py-20">
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
      {/* <section className="py-20 text-white bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500">
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
      </section>  */}

      {/* Final CTA */}
      <section className="py-20 text-center">
        <ContactRepresentatives/>
        {/* <Link to="/contact" className="px-6 py-3 font-semibold text-white transition bg-purple-700 rounded-md shadow hover:bg-purple-800">
          Plan a Trip
        </Link> */}
      </section>
    </div>
  )
}
