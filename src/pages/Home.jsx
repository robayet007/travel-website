// src/pages/Home.jsx
import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import '../index.css'
import { Globe } from "@/components/magicui/globe";
import ContactRepresentatives from '../component/ContactRepresentatives'

export default function Home() {
  return (
    <div className="text-gray-800 bg-white">


      {/* testing */}
      <div className="max-w-lg p-8 mx-auto text-center animated-border-container font-new-family">
        <h2 className="text-4xl font-bold tracking-widest sm:text-6xl md:text-7xl lg:text-8xl flicker-text">
           FLY EASY TRAVELS
        </h2>
        <h4 className="text-2xl italic tracking-widest flicker-subtext chewy-regular">
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
<section className="py-20 bg-white">
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

  <Globe />

      <section className="py-20 text-center">
        <ContactRepresentatives/>
     </section>
    </div>
  )
}
