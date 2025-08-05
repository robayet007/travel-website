


"use client"

import { useState } from "react"

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const galleryImages = [
    "/travel-website/Gallery-01.jpg?height=30&width=80",
    "/travel-website/Gallery-02.jpg?height=30&width=80",
    "/travel-website/Gallery-03.jpg?height=30&width=80",
    "/travel-website/Gallery-04.jpg?height=30&width=80",
    "/travel-website/Gallery-05.jpg?height=30&width=80",
    "/travel-website/Gallery-06.jpg?height=30&width=80",
  ]

  const airlineLogos = [
  "/travel-website/AirlinesSupport-01.png",
  "/travel-website/AirlinesSupport-02.png",
  "/travel-website/AirlinesSupport-03.png",
  "/travel-website/AirlinesSupport-04.png",
  "/travel-website/AirlinesSupport-05.png",
  "/travel-website/AirlinesSupport-06.png",
  "/travel-website/AirlinesSupport-07.png",
  "/travel-website/AirlinesSupport-08.png",
  "/travel-website/AirlinesSupport-09.png",
  // ...repeat as needed
]
 

  return (
    <footer className="relative text-white bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Our Gallery Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-cyan-400">Our Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded aspect-square">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-gray-300 transition-colors hover:text-blue-500">
                  <span className="mr-2">{">"}</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 transition-colors hover:text-blue-500">
                  <span className="mr-2">{">"}</span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 transition-colors hover:text-blue-500">
                  <span className="mr-2">{">"}</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 transition-colors hover:text-blue-500">
                  <span className="mr-2">{">"}</span>
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 transition-colors hover:text-blue-500">
                  <span className="mr-2">{">"}</span>
                  FAQs & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3">
                  <svg className="w-full h-full fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="text-gray-300">Araihazar, Narayanganj</span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3">
                  <svg className="w-full h-full fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span className="text-gray-300">(+880) 1950328100, 1733564476</span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3">
                  <svg className="w-full h-full fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="text-gray-300">efftravels.2500@gmail.com</span>
              </div>

              <div className="flex mt-4 space-x-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-700 rounded-full hover:bg-cyan-400"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-700 rounded-full hover:bg-cyan-400"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-700 rounded-full hover:bg-cyan-400"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Airlines Support Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-cyan-400">Airlines Support</h3>
            <div className="grid grid-cols-3 gap-2">
              {airlineLogos.map((logo, index) => (
                <div key={index} className="p-1 transition-transform duration-300 bg-white rounded hover:scale-105">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Airline logo ${index + 1}`}
                    className="object-contain w-full h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              © Zobayer Ahmad, All Right Reserved. Designed By <span className="text-cyan-400"></span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Home
              </a>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Cookies
              </a>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Help
              </a>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed p-3 text-white transition-all duration-300 rounded-lg shadow-lg bottom-6 right-6 bg-lime-500 hover:bg-lime-600 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

