import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'

/**
 * ✅ classNames utility function
 * একাধিক Tailwind class conditionally merge করার জন্য
 */
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * ✅ TourPackages Component
 * Headless UI + TailwindCSS + React Router দিয়ে বানানো dropdown menu
 */
const TourPackages = () => {
  return (
    <Menu as="div" className="relative">
      {/* 🔘 Dropdown button */}
      <MenuButton
        className={classNames(
          'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium',
          'transition-transform duration-500 hover:scale-110'
        )}
      >
        Tour Package
      </MenuButton>

      {/* 🔽 Dropdown items */}
      <MenuItems
        as="div"
        className="absolute left-0 z-50 mt-2 transition duration-150 ease-out origin-top-right bg-gray-800 rounded-md shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <Link
                to="/tour/international"
                className={classNames(
                  active ? 'bg-gray-700 text-white' : 'text-gray-300',
                  'block px-4 py-2 text-sm'
                )}
              >
                International Package
              </Link>
            )}
          </MenuItem>

          <MenuItem>
            {({ active }) => (
              <Link
                to="/tour/domestic"
                className={classNames(
                  active ? 'bg-gray-700 text-white' : 'text-gray-300',
                  'block px-4 py-2 text-sm'
                )}
              >
                Domestic Tour Package
              </Link>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default TourPackages

