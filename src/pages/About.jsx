import React from 'react'

export default function About() {
  return (
    <div className="text-gray-800 bg-white">

      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-50">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            Discover the Story Behind TravelWave
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Passion. Purpose. Adventure. We're more than a travel brand — we're a journey partner.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="flex flex-col-reverse items-center justify-between max-w-6xl gap-12 px-6 py-20 mx-auto md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At <strong>TravelWave</strong>, we believe travel is about **meaningful experiences**. Our mission is to inspire a deeper connection with the world—helping you find joy in sunsets, excitement in exploration, and peace in nature.
            <br /><br />
            Whether you're traveling solo, with loved ones, or with a purpose—we're here to make every trip unforgettable.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center justify-center w-full shadow-lg h-72 md:h-96 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl">
            <h3 className="text-2xl font-bold text-white">🌍 Let’s Explore Together</h3>
          </div>
        </div>
      </section>

      {/* Why TravelWave Cards */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Why Travel With Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: '🌐 Unique Routes', desc: 'We create exclusive paths and hidden adventures only known to locals.' },
              { title: '🧭 Local Experts', desc: 'Authentic experiences guided by knowledgeable locals who care.' },
              { title: '⚡ Instant Booking', desc: 'No stress. Just book and go with our seamless platform.' },
              { title: '🛡️ Safety First', desc: 'From insurance to on-trip help — your safety is our top priority.' },
              { title: '💬 Multilingual Support', desc: 'Speak your language? We do too. Always here for you.' },
              { title: '🌱 Sustainable Travel', desc: 'Explore while respecting nature and culture. Travel with impact.' }
            ].map((item, index) => (
              <div key={index} className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center text-white bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500">
        <h2 className="mb-4 text-3xl font-bold">Start your next journey with us</h2>
        <p className="mb-6 text-lg">Let’s craft something unforgettable — just for you.</p>
        <a href="/contact" className="inline-block px-6 py-3 font-semibold text-purple-800 transition bg-white rounded-md shadow hover:bg-gray-100">
          Contact Us
        </a>
      </section>

    </div>
  )
}
