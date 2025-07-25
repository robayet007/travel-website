import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen px-4 py-16 text-gray-800 bg-gray-50">
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

      <form className="max-w-3xl p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
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
  )
}
