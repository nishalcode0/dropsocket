import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import BetaAccess from './pages/BetaAccess.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Products from './pages/dashboard/Products.jsx'
import Orders from './pages/dashboard/Orders.jsx'
import StoreSettings from './pages/dashboard/StoreSettings.jsx'
import Analytics from './pages/dashboard/Analytics.jsx'
import Billing from './pages/dashboard/Billing.jsx'
import Profile from './pages/dashboard/Profile.jsx'

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
        <Route path="dashboard/orders" element={<Orders />} />
        <Route path="dashboard/store-settings" element={<StoreSettings />} />
        <Route path="dashboard/analytics" element={<Analytics />} />
        <Route path="dashboard/billing" element={<Billing />} />
        <Route path="dashboard/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
