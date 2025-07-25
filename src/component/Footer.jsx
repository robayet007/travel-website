import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-gray-200 bg-gray-900">
      <div className="grid gap-8 px-6 py-12 mx-auto max-w-7xl md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white">🌍 TravelWave</h2>
          <p className="text-sm text-gray-400">
            Your journey begins here. We help you travel better, cheaper, and smarter.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="mb-4 font-semibold">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} TravelWave. All rights reserved.
      </div>
    </footer>
  )
}
