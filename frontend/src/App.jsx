import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import BetaAccess from './pages/BetaAccess.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Products from './pages/dashboard/Products.jsx'

export default function App(){
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/beta-access" element={<BetaAccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="dashboard/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
