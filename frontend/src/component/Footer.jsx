"use client"

import { useState } from "react"

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const galleryImages = [
    "/mainimg.jpg?height=30&width=80",
    "/Gallery-02.jpg?height=30&width=80",
    "/Gallery-03.jpg?height=30&width=80",
    "/Gallery-04.jpg?height=30&width=80",
    "/Gallery-05.jpg?height=30&width=80",
    "/Gallery-06.jpg?height=30&width=80"
  ]

  const airlineLogos = [
    "/AirlinesSupport-01.png",
    "/AirlinesSupport-02.png",
    "/AirlinesSupport-03.png",
    "/AirlinesSupport-04.png",
    "/AirlinesSupport-05.png",
    "/AirlinesSupport-06.png",
    "/AirlinesSupport-07.png",
    "/AirlinesSupport-08.png",
    "/AirlinesSupport-09.png",
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

              {/* Social Media Links */}
              <div className="flex mt-4 space-x-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/FlyEasyTravelsBD?rdid=cHA0obi5rUFhWqeD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CbGCL31TH%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-700 rounded-full hover:bg-cyan-400"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM20 12h-3v12h-4V12h-3V8h3V6c0-3.066 1.794-5 5-5h3v4h-2c-1.103 0-1 .897-1 2v1h3l-1 4z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801959328100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-700 rounded-full hover:bg-green-500"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.78 11.78 0 0012 0a11.78 11.78 0 00-8.52 3.48A11.93 11.93 0 000 12a11.93 11.93 0 001.64 6L0 24l6.22-1.63A11.92 11.92 0 0012 24a11.93 11.93 0 008.52-3.48A11.78 11.78 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12 22a9.87 9.87 0 01-5-1.36l-.36-.2-3.68.96.98-3.59-.24-.38A9.87 9.87 0 012 12a10 10 0 0117.09-7.09A9.87 9.87 0 0122 12a9.87 9.87 0 01-10 10zm5.26-7.48c-.29-.15-1.72-.85-1.99-.95s-.46-.15-.66.15-.76.95-.94 1.14-.35.22-.64.07a8.27 8.27 0 01-2.45-1.51 9.3 9.3 0 01-1.72-2.12c-.18-.31 0-.47.13-.62.13-.13.31-.35.46-.52s.2-.31.31-.52.05-.39 0-.54c-.06-.15-.66-1.59-.9-2.18s-.48-.5-.66-.51H8.1a1.3 1.3 0 00-.93.44 3.93 3.93 0 00-1.23 2.91 6.85 6.85 0 001.42 3.61 15.65 15.65 0 005.89 5.34c.82.35 1.46.56 1.96.72a4.71 4.71 0 002.16.13 3.5 3.5 0 002.29-1.61 2.83 2.83 0 00.2-1.61c-.08-.15-.27-.22-.56-.37z" />
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
              © Zobayer Ahmmad, All Right Reserved. Designed By <span className="text-cyan-400"></span>
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
