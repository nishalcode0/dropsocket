import React from 'react';
import { useNavigate } from 'react-router-dom';
import BetaAccessForm from '../components/landing/BetaAccessForm';

export default function BetaAccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-20">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Go Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300 mb-12"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mx-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-blue-300 font-medium">BETA ACCESS</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Contact and get early access to the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              beta launch
            </span>
            {' '}with 10% discount
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Join our exclusive waitlist and be among the first to experience DropSocket. We'll contact you soon with early access details.
          </p>
        </div>

        {/* Form */}
        <BetaAccessForm />
      </div>
    </div>
  );
}
