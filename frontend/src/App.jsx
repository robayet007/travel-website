import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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

// Admin Components
import Admin from './pages/Admin'
import AdminLogin from './component/Admin/Login'

// Layout components
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Footer from './component/Footer'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/admin/login" />;
};

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isLoginPage = location.pathname === '/admin/login'

  return (
    <>
      {/* Public layout - don't show for admin routes except login */}
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

          {/* Admin Login (Public route) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Dashboard with nested routes */}
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Public footer - don't show for admin routes */}
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;