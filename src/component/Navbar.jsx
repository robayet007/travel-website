import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from '@headlessui/react'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
  import { Link, useLocation } from 'react-router-dom'
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Hajj Package', href: '/hajj' },
    { name: 'Contact', href: '/contact' },
    { href: '/landServices'}
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Navbar() {
    const location = useLocation()
  
    return (
      <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-700">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:gray-red-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
  
            {/* Logo and nav */}
            <div className="flex items-center flex-1 transition-transform duration-500">
              <div className="flex items-center shrink-0">
              <img
                  alt="Travel Logo"
                  src="/logo.png"
                  className="w-10 h-10 p-1 bg-white rounded-full shadow-sm "
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 transition-transform duration-500 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                        'transition-transform duration-500 hover:scale-110'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Profile + Bell */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
 
              <div className="items-center hidden gap-3 sm:flex">
                <a href='https://www.facebook.com/FlyEasyTravelsBD?rdid=cHA0obi5rUFhWqeD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CbGCL31TH%2F#'>
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-110">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                    Facebook
                  </button>
                </a>

                <Link
                  to="/landServices"
                  className="px-6 py-2 font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
                >
                  Land Services
                </Link>
                
              </div>
            </div>
            
  

                
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <DisclosurePanel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    )
  }
  