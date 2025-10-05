// App.jsx
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Hajj from './pages/Hajj'
import LandServices from './pages/LandServices'
import TourPackges from './pages/TourPackges'
import InternationalTourPackage from './pages/InternationalTourPackage'
import DomesticTourPackage from './pages/DomesticTourPackage'
import Admin from './pages/Admin'

function App() {
  const location = useLocation()

  // যদি admin route এ থাকি, তাহলে Navbar ও Slider hide হবে
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Slider />}

      <main className="min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/tour" element={<TourPackges />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landServices" element={<LandServices />} />
          <Route path="/tour/international" element={<InternationalTourPackage />} />
          <Route path="/tour/domestic" element={<DomesticTourPackage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App

