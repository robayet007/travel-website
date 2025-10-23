import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/admin/holy-hajj', name: 'Holly Hajj', value: 'holy-hajj' },
    { path: '/admin/holy-umrah-hajj', name: 'Holly Umrah Hajj', value: 'holy-umrah-hajj' },
    { path: '/admin/international-tour', name: 'International Tour', value: 'international-tour' },
    { path: '/admin/domestic-tour', name: 'Domestic Tour', value: 'domestic-tour' }
  ]

  return (
    <div className="w-64 text-white bg-blue-800">
      <div className="p-6">
        <h2 className="text-xl font-bold">Travel Admin</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-3 px-6 transition duration-200 ${
              location.pathname === item.path 
                ? 'bg-blue-900 border-l-4 border-white' 
                : 'hover:bg-blue-700'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar