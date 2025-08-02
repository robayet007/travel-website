import React from 'react'

export default function Contact() {
  return ( 
 <div className='relative flex flex-col items-center gap-6 md:flex-row md:justify-evenly'>
     <div className="flex flex-col justify-center space-y-8 ml-50 ">
        <div className=''>
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Tempor erat elitr rebum at clita.
          </p>
        </div>

        <div className="space-y-6">
          {/* Office */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0 bg-green-500 rounded w-14 h-14">
              <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-500">Office</h3>
              <p className="text-gray-600">Araihazar, Narayanganj</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0 bg-green-500 rounded w-14 h-14">
              <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-500">Mobile</h3>
              <p className="text-gray-600">(+880) 1959328100, 1733564476</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0 bg-green-500 rounded w-14 h-14">
              <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-500">Email</h3>
              <p className="text-gray-600">efttravels.2500@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

// right part

    <div className="flex-col items-center justify-center px-4 py-16 text-gray-800 align-bottom min-h felx">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            Contact Us
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Have questions? Ready to plan your next adventure? We’re here to help.
        </p>
      </div>

      <form
      action="https://formsubmit.co/efttravels.2500@gmail.com"
      method="POST"
      className="max-w-3xl p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              name='name'
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              name ='email'
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name='message'
            rows="5"
            placeholder="Tell us about your trip or question..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}
