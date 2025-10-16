"use client"
import { Link } from "react-router-dom"
import "../index.css"

const teamMembers = [
  {
    id: 2,
    name: "Zobayer Ahmmad",
    position: "Director",
    image: "/p1.png",
    facebook:
      "https://www.facebook.com/ZobayerAhmmadZetu0?rdid=YSRgKLOxaosyiT78&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EwQcxJzLY%2F#",
    twitter:
      "https://x.com/ZobayerAhmmad?t=lBOGfwDn0xagJSBusWgj5w&s=09",
    instagram:
      "https://www.instagram.com/zobayer.ahmmad?igsh=MTN2bHZwaTRtcjdkbg%3D%3D",
  },
]

export default function ContactRepresentatives() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white">
      <div className="w-full max-w-6xl">
        {/* Header (About-like lines) */}
        <div className="mb-12 text-center">
          <div className="relative flex items-center justify-center mb-6">
            <div className="flex flex-col items-end">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
              <div className="h-0.5 bg-yellow-400 w-16"></div>
            </div>
            <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">
              TRAVEL GUIDE
            </span>
            <div className="flex flex-col">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
              <div className="h-0.5 bg-yellow-400 w-16"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-700">
            Contact Our Representative
          </h1>
        </div>

        {/* Centered Card */}
        <div className="flex justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-full max-w-sm p-6 text-center bg-white rounded-lg shadow-lg"
            >
              {/* Image */}
              <div className="mb-4 transition-transform duration-300 hover:scale-105">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full rounded-lg"
                />
              </div>

              {/* Social Links */}
              <div className="flex justify-center mb-4 space-x-2">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  f
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full bg-sky-500 hover:bg-sky-600"
                >
                  t
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-pink-500 rounded-full hover:bg-pink-600"
                >
                  ig
                </a>
              </div>

              {/* Name and Position */}
              <h3 className="mb-1 text-lg font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="px-6 py-3 font-semibold text-white transition bg-purple-700 rounded-md shadow hover:bg-purple-800"
          >
            Plan a Trip
          </Link>
        </div>
      </div>
    </div>
  )
}
