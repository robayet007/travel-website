"use client"
import { Link } from "react-router-dom"
import '../index.css'

const teamMembers = [
  {
    id: 1,
    name: "Zahirul Islam",
    position: "Founder & Chairman",
    image: "/placeholder.svg?height=400&width=300&text=Professional+Man+in+Suit",
    facebook: "https://facebook.com/zahirul.islam",
    twitter: "https://twitter.com/zahirul_islam",
    instagram: "https://instagram.com/zahirul.islam",
  },
  {
    id: 2,
    name: "Zobayer Ahmmad",
    position: "Director",
    image: "/travel-website/p1.png",
    facebook: "https://facebook.com/zobayer.ahmmad",
    twitter: "https://twitter.com/zobayer_ahmmad",
    instagram: "https://instagram.com/zobayer.ahmmad",
  },
  {
    id: 3,
    name: "Robayet Islam",
    position: "Office Administrator",
    image: "/placeholder.svg?height=400&width=300&text=Professional+Man+in+Suit",
    facebook: "https://facebook.com/zakir.hossen",
    twitter: "https://twitter.com/zakir_hossen",
    instagram: "https://instagram.com/zakir.hossen",
  },
  {
    id: 4,
    name: "Zakir Hossen",
    position: "Manager",
    image: "/placeholder.svg?height=400&width=300&text=Professional+Man+in+Suit",
    facebook: "https://facebook.com/zavian.zeus",
    twitter: "https://twitter.com/zavian_zeus",
    instagram: "https://instagram.com/zavian.zeus",
  },
]

export default function ContactRepresentatives() {
  return (
    <div className="min-h-screen px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="relative flex items-center justify-center mb-6 ">
            <div className="flex flex-col items-end">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
              <div className="h-0.5 bg-yellow-400 w-16 "></div>
            </div>
            <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">TRAVEL GUIDE</span>
            <div className="flex flex-col ">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2 "></div>
              <div className="h-0.5 bg-yellow-400 w-16"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-700">Contact Our Representative</h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-6 text-center rounded-lg shadow">
              {/* Profile Image */}
              <div className="mb-4 transition-transform duration-300 hover:scale-110">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>

              {/* Social Icons */}
              <div className="flex justify-center mb-4 space-x-2">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  f
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600"
                >
                  t
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
                >
                  ig
                </a>
              </div>

              {/* Name and Position */}
              <h3 className="mb-1 text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 text-center">
        {/* <ContactRepresentatives/> */}
        <Link to="/contact" className="px-6 py-3 font-semibold text-white transition bg-purple-700 rounded-md shadow hover:bg-purple-800">
          Plan a Trip
        </Link>
      </section>


    </div>
  )
}
