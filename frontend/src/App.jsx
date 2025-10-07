import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


// Public pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Hajj from './pages/Hajj'
import LandServices from './pages/LandServices'
import TourPackges from './pages/TourPackges'
import InternationalTourPackage from './pages/InternationalTourPackage'
import DomesticTourPackage from './pages/DomesticTourPackage'

// Admin
import Admin from './pages/Admin'
import Umrah from './pages/Umrah'
import HajjPackage from './pages/HajjPackage'
import International from './pages/International'
import Domestic from './pages/Domestic'

// Layout components
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Footer from './component/Footer'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      {/* Public layout */}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Slider />}

      <main className="min-h-screen text-white">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/tour" element={<TourPackges />} />
          <Route path="/tour/international" element={<InternationalTourPackage />} />
          <Route path="/tour/domestic" element={<DomesticTourPackage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landServices" element={<LandServices />} />

          {/* Admin dashboard with nested routes */}
          <Route path="/admin/*" element={<Admin />}>
            <Route index element={<Umrah />} />
            <Route path="umrah" element={<Umrah />} />
            <Route path="hajj" element={<HajjPackage />} />
            <Route path="international" element={<International />} />
            <Route path="domestic" element={<Domestic />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<div className="mt-10 text-2xl text-center text-white">Page Not Found</div>} />
        </Routes>
      </main>

      {/* Public footer */}
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;
