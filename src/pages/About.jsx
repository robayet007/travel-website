

"use client"

export default function About() {
  const leftServices = [
    "24/7 Service",
    "First Class Flight",
    "Handpicked Hotel",
    "Tourist Visa Processing",
    "Accommodation in (3 & 5) Star Hotels",
  ]

  const rightServices = [
    "BMET Card Processing",
    "Numerous Premium City Tours",
    "International & Domestic AIR Tickets",
    "Advanced Model Vehicles",
    "Domestic & International Tour Packages & Hotel Bookings",
  ]

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Office Image */}
          <div className="w-full">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Fly Easy Tours & Travels Office"
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - About Us Content */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase">ABOUT US</h2>
                <div className="ml-3 h-0.5 w-8 bg-green-500"></div>
              </div>
              <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
                Welcome to <span className="text-blue-500">Our Travels Agency</span>
              </h1>
            </div>

            {/* Description Text */}
            <div className="mb-8 space-y-3">
              <p className="text-sm leading-relaxed text-gray-600">
                <span className="font-semibold">"FLY EASY TOURS & TRAVELS"</span> is a modern quality and standard
                travel agency.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                <span className="font-semibold">***Travel with ease, avoid health risks.***</span>
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                "Health is the root of all happiness"—The first aim of our service is to ensure the physical health of
                the client or passenger. I always try to understand the needs and expectations of clients. We specialize
                in tailoring packages to suit your needs. We can provide hotel accommodation and transport of the
                highest quality according to your choice. Also we are able to ensure all kinds of packages within your
                budget and how many days you want to spend on the tour. Our package will be the perfect combination of
                your needs and our professional advice.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-x-8 gap-y-2">
              {/* Left Column */}
              <div className="space-y-2">
                {leftServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-4 h-4 mr-3">
                      <svg className="w-full h-full text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                {rightServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-4 h-4 mr-3">
                      <svg className="w-full h-full text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read More Button */}
            <div>
              <button className="px-6 py-3 font-medium text-white transition-colors duration-200 bg-green-500 rounded hover:bg-green-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
