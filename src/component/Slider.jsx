import React, { useState, useEffect } from 'react'

const images = [
  '/travel-website/slide-1.jpg', // mountain
  '/travel-website/slide-2.jpg', // forest
  '/travel-website/slide-3.jpg', // ocean
  '/travel-website/slide-2.jpg', // sunset
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // change slide every 3 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [current]) // runs again whenever 'current' changes

  return (
    <div className="w-full mt-5 ">
      <div className="relative w-[90%] mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Slide Image */}
        <div className="relative w-full h-64 sm:h-[30rem] overflow-hidden]">
          <img
            src={`${images[current]}?auto=format&fit=crop&w=1600&q=80`}
            alt={`Slide ${current}`}
            className="w-full h-full transition-all duration-500 "
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/50 hover:bg-black/70"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/50 hover:bg-black/70"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
